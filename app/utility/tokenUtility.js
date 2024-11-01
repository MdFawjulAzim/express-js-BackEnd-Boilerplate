import {JWT_EXPIRATION_TIME, JWT_SECRET} from "../config/config.js";
import jwt from "jsonwebtoken";

export const EncodeToken= (email,user_id)=>{
    const key = JWT_SECRET;
    const EXPIRE = {expiresIn: JWT_EXPIRATION_TIME};
    const PAYLOAD = {email: email, user_id: user_id};
    jwt.sign(PAYLOAD, key, EXPIRE);


}