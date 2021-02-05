import { Request, Response } from 'express'
import { connect } from '../database'
// import { Food } from '../interface/food'


export async function newUser(req: Request, res: Response){
    const newUser = req.body
    // console.log(newFood)
    const conn = await connect()
    conn.query(`INSERT INTO users SET ?`, [newUser])
    return res.json({ message: "Food created" })

}


export async function getUsers(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM users');
        return res.json(users[0]);
    }
    catch (e) {
        console.log(e)
    }
}

//Delete
export async function deleteUser(req: Request, res: Response) {
    const id = req.params.userId
    const conn = await connect()
    await conn.query('DELETE FROM users WHERE id = ?', [id])
    return res.json({
        message: "User deleted"
    })
}
