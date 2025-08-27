
import {validationResult} from 'express-validator';
import { register } from '../services/user.service.js';
const registerUser =async (req,res)=>{
  try{
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(422).json({errors:errors.array()})
    // }
    const {username,email,password} = req.body;
    const result = register({username,email,password});
    return res.status(201).json(result);
    
  }catch(ex){
    req.status(400).json({message:ex.message});
  }
};
export const userController ={
    registerUser
}