import express from 'express';
import { createJobListing } from '../controllers/jobController.js'; 

const jobRouter = express.Router();

jobRouter.post('/createJob', createJobListing);

export default jobRouter;