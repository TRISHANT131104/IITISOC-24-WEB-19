// import NextAuth from "next-auth";
// import GoogleProvider from 'next-auth/providers/google'
// import userModel from "@/backend/models/userModel";
// import { connectDB } from "@/backend/config/db";

// const handler =NextAuth({
// providers:[
// GoogleProvider({
//     clientId:process.env.GOOGLE_ID,
// clientSecret:process.env.GOOGLE_SECRET


// })


// ]
// })


import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import userModel from '@/backend/models/userModel.js';
import { connectDB } from '@/backend/config/db.js';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.id = user._id;
            }
            return token;
        },
        async session({session}) {
            
            return session;
        },
        async signIn({account,profile,user,credentials}){
            try {
                await connectDB()
                const checkEmail = await user.find({email: user.email})

                if (checkEmail.length==0){
                    await user.insertMany({name:user.name,email:user.email})

                }

            }catch (error){
                console.log(err)
            }
        }
    }

})
    
export {handler as GET , handler as POST}