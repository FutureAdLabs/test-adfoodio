import db from './connection';
import { queryCallback } from 'mysql';

const User = () => {

}

User.save = (user: any, cb: queryCallback | undefined) => {
    db.query("INSERT INTO users SET ?", user, cb)
}

User.findUser = (signinUser) => {
    
    db.query(`SELECT email, password FROM users WHERE email = '${signinUser.email}' AND password = '${signinUser.password}' `  )
}



export default User; 