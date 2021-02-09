import { use } from "chai";
import { createSecretKey } from "crypto";
import { Request, Response } from "express";
import { connect } from "../database";
// import { Food } from '../interface/food'

export async function newUser(req: Request, res: Response) {
  const newUser = req.body;
  // console.log(newFood)
  const conn = await connect();
  conn.query(`INSERT INTO users SET ?`, [newUser]);
  conn.end()
  return res.json({ message: "Food created" });
}

export async function getUser(req: Request, res: Response) {
    try {
    const conn = await connect();
    const user: any = await conn.query("SELECT * FROM users WHERE email = ? ", [req.body.email]);
    const orders = user[0][0].orders.id;

    let arrayRes:any = []
    await Promise.all(orders.map(async (order: any) => {
        const userOrder: any = await conn.query(`SELECT * FROM orders WHERE JSON_CONTAINS(sentence, ?)`, `{"id": ${order.toString()}}`);
        arrayRes.push(userOrder[0][0].sentence);
    }));

    console.log('orders', orders)
    console.log('arrayRes', arrayRes)
    conn.end()
    res.json(arrayRes)
    } catch (err) {
        console.log('==> ERROR <==', err)
    }
}

//Delete
export async function deleteUser(req: Request, res: Response) {
  const id = req.params.userId;
  const conn = await connect();
  await conn.query("DELETE FROM users WHERE id = ?", [id]);
  return res.json({
    message: "User deleted",
  });
}
