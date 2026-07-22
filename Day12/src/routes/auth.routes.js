const express=require("express")
const authRouter=express.Router();
const usermodel=require("../models/usermodel")
const jwt=require("jsonwebtoken")
// const cookies=require("cookie-parser")

authRouter.post("/register",async(req,res)=>{
    console.log("Register API called");
    const {name,email,password}=req.body
    console.log("1")
    const isuserAlreadyexist=await usermodel.findOne({email})
     console.log("2")
    if(isuserAlreadyexist){
        return res.status(400).json({
         message:"this gmail is already exist"
    })
    }
    console.log("3")
    const user=await usermodel.create({
        name,email,password
    })
    const token=jwt.sign(
        {
        id:user._id,
        email:user.email
    },
    process.env.JWT_SECRET
)
res.cookie("JWT_token",token)
    res.status(201).json({
        message:"user registerd sucessfuly",
        user
    })
})
module.exports=authRouter