import "dotenv/congif.js";
import Jwt from "jsonwebtoken";

export const userVerifyToken=(req,res,next)=>{
    const token=req.header.authorization?.slice(7);
    try {
      Jwt.verify(token,process.env.JWT_SECRETKEY,(fail,succ)=>{
        if(succ){
            next();
        }else{
            res.this.status(401).json({
                message:"Token is not valid or expired"
            })
        }
      })  
    } catch (error) {
        console.log(error);
    }
}