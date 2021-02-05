import { Request, Response } from 'express'
import { connect } from '../database'
import { Food } from '../interface/food'


//connect is the configuration to access to the DB 
//this controllers are invoqued in base.routes.ts


//Async function to take all foods from DB
export async function getFoods(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const foods = await conn.query('SELECT * FROM foods');
        // console.log(foods)
        //[0] because the info is in this position
        return res.json(foods[0]);
    }
    catch (e) {
        console.log(e)
    }
}

//Async funtion to create food in the DB
export async function createFood(req: Request, res: Response) {
    const newFood: Food = req.body
    // console.log(newFood)
    const conn = await connect()
    conn.query(`INSERT INTO foods SET ?`, [newFood])
    return res.json({ message: "Food created" })
}

//Async function to take one food from DB
export async function getFood(req: Request, res: Response): Promise<Response | void> {
    const id = req.params.foodId
    const conn = await connect()
    const food = await conn.query('SELECT * FROM foods WHERE id = ? ', [id])
    return res.json(food[0]);
}

//Delete
export async function deleteFood(req: Request, res: Response) {
    const id = req.params.foodId
    const conn = await connect()
    await conn.query('DELETE FROM foods WHERE id = ?', [id])
    return res.json({
        message: "Food deleted"
    })
}

//Edit
export async function updateFood(req: Request, res: Response): Promise<Response | void>  {
    const id = req.params.foodId
    const updateFood:Food = req.body
    const conn = await connect()
    await conn.query('UPDATE foods set ? WHERE id = ? ', [updateFood, id])
    res.json({
        message:"Food updated"
    })
}