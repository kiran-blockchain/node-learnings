import dotenv from 'dotenv';
import app from './app.js';
import {database} from './models/index.js';

const PORT = process.env.PORT || 5000;

(async()=>{
    try{
        await database.sequelize.authenticate();
        console.log('database connected');
        app.listen(PORT,()=>{
            console.log(`App listening on http://locahost:${PORT}`)
        })

    }
    catch(ex){
        console.error('DB connection failed',ex.message);
        process.exit(1);
    }

})();