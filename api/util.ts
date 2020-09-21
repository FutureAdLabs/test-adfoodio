import jwt from 'jsonwebtoken';
import config from  './config';

const getToken = (user: any) => {
    return jwt.sign(user, config.JWT_SECRET, { expiresIn : '48h' })
}

export {
    getToken
};