import mongoose from 'mongoose';

const jobListingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    category: { type: String, required: true },
    contact: { type: String, required: true },
    salary: { type: Number, required: true },
    description: { type: String, required: true },
    cartData:{type:Object,default:{}},
                
  },{minimize: false});
  export const JobListing = mongoose.model('JobListing', jobListingSchema);