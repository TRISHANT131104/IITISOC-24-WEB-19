import mongoose from 'mongoose';

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Popeye:15072004@cluster0.j9uo6da.mongodb.net/fullstackwebsiteusingmern').then(()=>{console.log('Database connected')})
    // await mongoose.connect('mongodb://localhost:27017/login').then(()=>{console.log('Database connected')})
}