import mongoose  from "mongoose";

const cartDetail=new mongoose.Schema(
    {
        foodId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Details",
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        resturant:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        image:{
            type:String,
            required:true,
        }
    }
)
export const Cart =mongoose.model("Cart",cartDetail)