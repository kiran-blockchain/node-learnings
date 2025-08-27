import {database} from '../models/index.js';
import bcrypt from 'bcrypt';
export const register = async ({
    username,
    email,
    password
})=>{
    //if the username and email exists return error
    const existing = await database.User.findOne({where:{
        username:username
    }});
    if (existing) throw new Error('Username already exists');
    //encrypt the password before storing.
    const passwordHash = await bcrypt.hash(password,10)
    const user = await database.User.create({
        username,
        email,
        passwordHash:passwordHash});
    return {...user};
}