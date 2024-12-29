import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://longhoang260303:123@cluster0.3w1qa.mongodb.net/ecommerceWeb').then(()=>console.log("DB concected"));
}
