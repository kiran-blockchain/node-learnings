 import  { sequelize } from '../config/config.js';
 import  {User} from './user.js'; 
 const userFactory = User(sequelize);
 export const  database = {

    User: userFactory,
    sequelize
 }