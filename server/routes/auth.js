const express = require("express");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post('/api/signup',  async (req, res) => {
    const {name, email, password} = req.body;
    
    const existinghUser = await User.findOne({ email });
    if(existinghUser){
        return res.json({msg: "User with the same email already exists!"})
    }
});

module.exports = authRouter;