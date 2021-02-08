import { Request, Response } from "express";
import { connect } from "../database";

//connect is the configuration to access to the DB
//this controllers are invoqued in base.routes.ts

//Async funtion to create food in the DB
export async function newOrder(req: Request, res: Response) {
  //   console.log(req.body);
  const desserts = req.body.desserts;
  const mains = req.body.mains;
  const drinks = req.body.drinks;
  const discount40 = req.body.discount40;
  const discount10 = req.body.discount10;
  const totalBill = req.body.totalBill;
  const totalTime = req.body.totalTime;
  const timeInit = req.body.timeInit;
  const timeEnd = req.body.timeEnd;
  let newOrder:any = {
    desserts: desserts,
    mains: mains,
    drinks: drinks,
    discount40: discount40,
    discount10: discount10,
    totalBill: totalBill,
    totalTime: totalTime,
    timeInit: timeInit,
    timeEnd: timeEnd,
  };
  const conn = await connect();
  newOrder = JSON.stringify(newOrder)
  console.log("neworder", newOrder, "type", typeof newOrder);

  conn.query(`INSERT INTO orders SET ?`, { sentence: newOrder });
  return res.json({ message: "Order created" });
}
