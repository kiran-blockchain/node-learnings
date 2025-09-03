
import {validationResult} from 'express-validator';
import { register } from '../services/user.service.js';
import bcrypt from 'bcrypt';
const registerUser =async (req,res)=>{
  try{
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(422).json({errors:errors.array()})
    // }
    const {username,email,password} = req.body;
    const passwordHash = await  bcrypt.hash(password,10);
    const result = register({username,email,passwordHash});

    const compare  = bcrypt.compare()
    return res.status(201).json(result);
    
  }catch(ex){
    req.status(400).json({message:ex.message});
  }
};

const login = async(req,res)=>{
  // where you validate email and password
  // and you will send true.
  // select username, firstname, lastname, Password from user where email = xyz

  var token = jwt.sign({ foo: 'bar' }, 'xysdfsngigkakdingingnggg');
}
export const userController ={
    registerUser
}