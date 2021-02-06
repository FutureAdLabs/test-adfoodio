"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
// import { createPool } from 'mysql2/promise'
var mysql = require('mysql');
// export async function connect() {
//     const connection = await createPool({
//         host: 'localhost',
//         user: 'root',
//         password: 'cuaresma22',
//         database: 'adfoodio',
//         connectionLimit: 10
//     })
//     return connection
// }
exports.connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
});
exports.connect.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
    /*Create a database named "mydb":*/
    exports.connect.query("CREATE DATABASE adfoodio", function (err, result) {
        if (err)
            throw err;
        console.log("Database created");
    });
});
