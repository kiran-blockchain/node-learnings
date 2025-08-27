import dotenv from 'dotenv';
dotenv.config();
import {database} from '../models/index.js';

(async ()=>{
    try{
    await database.sequelize.authenticate();
    await database.sequelize.sync({alter:true});
    }
    catch(ex){
        console.error('DB connection failed',ex.message);
    }finally{
         await database.sequelize.close();
    }

})();