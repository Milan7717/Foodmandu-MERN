import "dotenv/config.js"

import Jwt from "jsonwebtoken";

export const adminVerifyToken=(req,res,next)=>{
    const token=req.headers.authorization?.slice(7);
    try {
        Jwt.verify(token,process.env.JWT_SECRETKEY,(fail,succ)=>{
            if(succ){
                if (succ.userdetails.role=="admin") {
                    next();
                }
                else{
                    res.status(401).json({
                        message:"Only admin is allowedin this page"
                    })
                }
            }else{
                res.status(401).json({
                    messgae:"JWT failed"
                })
            }
        })
    } catch (error) {
        console.log(error);
    }
}