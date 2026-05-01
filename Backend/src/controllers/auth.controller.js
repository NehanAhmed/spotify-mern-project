const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const registerUser = async(req,res)=>{
    const {userName,email,password,role="user"} = req.body;
    const ifUserAlreadyExists = await userModel.findOne({
        $or:[
            {userName},
            {email}
        ]
    })

    if(ifUserAlreadyExists){
        return res.status(409).json({message:"User Already Exists."})
    }
    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = await userModel.create({
        userName,
        email,
        password:hashedPassword,
        role
    })

    const token = jwt.sign({id:newUser._id,role:newUser.role},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"User Created Sucessfully.",
        user:{
            id:newUser._id,
            userName:newUser.userName,
            email:newUser.email,
            role:newUser.role
        }
    })

}
const loginUser = async(req,res)=>{
    const {userName,email,password} = req.body

    const user = await userModel.findOne({
        $or:[
            {userName},
            {email}
        ]
    })

    if(!user){
        res.status(401).json({message:"Invalid Credentials."})
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        res.status(401).json({message:"Invalid Credentials."})
    }
    const token = jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)
    res.cookie('token',token)
    res.status(200).json({
        message:"Logged in Successfully.",
        user:{
            id:user._id,
            userName:user.userName,
            email:user.email,
            role:user.role
        }
    })
    
}
const logoutUser = async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "No token found."
        });
    }

    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production"
    });

    return res.status(200).json({
        message: "Logged out successfully."
    });
};
module.exports = {registerUser,loginUser,logoutUser}