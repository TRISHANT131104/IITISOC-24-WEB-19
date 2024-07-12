import express from 'express';
import { ApplyNow } from '../controllers/ApplicationController.js';




const ApplyRouter = express.Router();

ApplyRouter.post('/Apply', ApplyNow);


export default ApplyRouter;