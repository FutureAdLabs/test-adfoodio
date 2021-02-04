import { createPool } from 'mysql2/promise'

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'cuaresma22',
        database: 'adfoodio',
        connectionLimit: 10
    })
    return connection
}