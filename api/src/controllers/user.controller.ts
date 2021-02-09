import { Request, Response } from "express";
import { connect } from "../database";


// Create a new user on DDBB after Signin on Firebase
export async function newUser(req: Request, res: Response) {
  const jsonorder = JSON.stringify({ id: [] });
  const newUser = { email: req.body.email, orders: jsonorder };
  const conn = await connect();
  await conn.query(`INSERT INTO users SET ?`, [newUser]);
  conn.end()
  return res.json({ message: "user created" });
}


// Function to collect data from old user orders 
export async function getUser(req: Request, res: Response) {
  console.log('=================================> 1')
  try {
    const conn = await connect();
    console.log('=================================> 2')
    const user: any = await conn.query("SELECT * FROM users WHERE email = ? ", [
      req.body.email
    ]);
    conn.end();
    console.log('=================================> 3')
    let orders = user[0][0].orders.id;
    // console.log('orders', orders)
    // console.log('orders LAST', orders[orders.length -1], orders[orders.length -2], orders[orders.length -3])
    if (orders.length > 2) {
      let ordersCopy = []
      ordersCopy.push(orders[orders.length -1]) 
      ordersCopy.push(orders[orders.length -2]) 
      ordersCopy.push(orders[orders.length -3])
      orders = ordersCopy 
    } 

    let arrayRes: any = [];
    console.log('=================================> 4')
    await Promise.all(
      orders.map(async (order: any) => {
        console.log('=================================> 5 MAP')
        const conn = await connect();
        const userOrder: any = await conn.query(
          `SELECT * FROM orders WHERE JSON_CONTAINS(sentence, ?)`,
          `{"id": ${order.toString()}}`
        );
        console.log('=================================> 6')
        conn.end();
        console.log('=================================> 7')
        if (userOrder[0][0]) {
          console.log('=================================> 8')
          arrayRes.push(userOrder[0][0].sentence);
        } else {
          // For avoiding errors reading de Database
          console.log('=%=%=%=%=%=> File Broken')
        }
      })
    );
    conn.end();
    res.json(arrayRes);
  } catch (err) {
    console.log("==> ERROR <==", err);
  }
}


// Only for setting DDBB
//Delete
export async function deleteUser(req: Request, res: Response) {
  const id = req.params.userId;
  const conn = await connect();
  await conn.query("DELETE FROM users WHERE id = ?", [id]);
  return res.json({
    message: "User deleted",
  });
}
