import express from 'express';
import {body} from 'express-validator';
import { userController } from '../controllers/user.controller.js';
import uploadFile from '../controllers/fileUpload.js';

const router = express.Router();

router.post('/register',userController.registerUser);
router.post('/fileUpload',uploadFile);
export default router;