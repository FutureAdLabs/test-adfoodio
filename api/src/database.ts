import { createPool } from 'mysql2/promise'

// Keys to access to the DDBB
// Should use dot files to keep sensible data
// Keeping it just for development
export async function connect() {
    const connection = await createPool({
        host: 'b4pesu3oy3hmjgdsjqbb-mysql.services.clever-cloud.com',
        user: 'u9ernpi7xwolltwa',
        password: 'KoLoyK34JHi12N1lEuTy',
        database: 'b4pesu3oy3hmjgdsjqbb',
    })
    return connection
}
