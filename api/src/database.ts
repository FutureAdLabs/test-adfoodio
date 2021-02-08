import { createPool } from 'mysql2/promise'


export async function connect() {
    const connection = await createPool({
        host: 'b4pesu3oy3hmjgdsjqbb-mysql.services.clever-cloud.com',
        user: 'u9ernpi7xwolltwa',
        password: 'KoLoyK34JHi12N1lEuTy',
        database: 'b4pesu3oy3hmjgdsjqbb',
    })
    return connection
}
// mysql -h b4pesu3oy3hmjgdsjqbb-mysql.services.clever-cloud.com -P 3306 -u u9ernpi7xwolltwa -p b4pesu3oy3hmjgdsjqbb
