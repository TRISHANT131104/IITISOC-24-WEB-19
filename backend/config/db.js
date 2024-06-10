import mongoose from 'mongoose';

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Popeye:15072004@cluster0.j9uo6da.mongodb.net/fullstackwebsiteusingmern').then(()=>{console.log('Database connected')})
    
}