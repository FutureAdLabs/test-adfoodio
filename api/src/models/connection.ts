import mysql from 'mysql';

const con = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'restaurant'
            });

con.connect((err)=>{
    if(err) throw err;
    console.log('connected to:', con.threadId);
});

export default con;