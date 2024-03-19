import { User } from "../models/authModel"


// get all user
export const allUser=async(req,res)=>{
    try {
        console.log(req);
        const users=await User.find()
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}

//register user
export const registerUser=async(req,res)=>{
    try {
        if (!req.body.firstName,!req.body.lastName,!req.body.userName,!req.body.password) {
            return res.status(400).send({
                message:"Please send all fields"
            })

        }
        //hash the password
const saltRounds =10;
const hashedPassword=await bcrypt.hash(req.body.password,saltRounds)

const newUser={
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    userName:req.body.userName,
    password:hashedPassword,
    role:"user",
}

const users=await User.create(newUser);
        return res.status(201).send(users);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error creating user", error });
    }
}

//admin register
export const registerAdmin =async(req,res)=>{
    try {
        if (
          (!req.body.firstName,
          !req.body.lastName,
          !req.body.userName,
          !req.body.password)
        ) {
          return res.status(400).send({
            message: "Send all fields",
          });
        }
        const adminExist = await User.find({ role: "admin" });
        if (adminExist.length == 0) {
          // Hash the password
          const saltRounds = 10; // Number of salt rounds for bcrypt
          const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    
          const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: hashedPassword, // Store hashed password
            role: "admin",
          };
    
          const users = await User.create(newUser);
          return res.status(201).send(users);
        } else {
          res.status(500).json({
            errorMessage: "admin already exists",
          });
        }
      } catch (error) {
        console.log(error);
        return res.status(400).json(error);
      }
}

//login 
export const login =async (req,res)=>{
    try {
        const {userName,password}=req.body;
        const user =await User.findOne({userName});
        if (!user) {
            return res.status(401).json({
                message:"username not found",
            })
        }
        //compare password
        const passwordMatch=await bcrypt.compare(password,user.password);
        if(!passwordMatch){
            return res.status(401).json({
                message:"Password incorrect"
            })
        }
        //jwt token
const token=JWT.sign({
    userdetails:user
},
process.env.JWT_SECRETKEY,
audience:"aud",
issuer:"iss",
)}


        //logied in
        res.status(200).json({
            message:"User Logged in successfully",
            token,
            role:user.role,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}