const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

require("../db/connection");
const User = require("../models/userSchema");

router.get(`/`, (req, res) => {
    res.send(`Hello World! xyz`);
 });
  


router.post("/register", async (req, res) => {
    console.log(req)    
    const { name, email, password, age } = req.body;
  
    if (!name || !email || !password || !age ) {
      return res.status(422).json({ error: "Please enter full detail!" });
    }
  
    try {
      const userExist = await User.findOne({ email: email });
  
      if (userExist) {
        return res.status(422).json({ error: "Email Already exist" });
      } else {
        const user = new User({
          name,
          email: email.toLowerCase(),
          password,
          age,
        });
   
        await user.save();
  
        res.status(201).json({ message: "Resgistration successfull!" });
      }
    } catch (err) {
      console.log(err);
    }
    return 
  });


  router.post("/login", async (req, res) => {
    let token;
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: " Please fill data!" });
      }
  
      const userLogin = await User.findOne({ email: email });
  
      if (userLogin) {
        const passwordMatch = await bcrypt.compare(password, userLogin.password);
  
        token = await userLogin.generateAuthToken();
        console.log(token)
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
  
        if (!passwordMatch) {
          res.status(400).json({ message: "Invalid Credentials!" });
        } else {
          res.status(200).json({ message: "Login Successfull!" });
        }
      } else {
        res.status(400).json({ message: "Invalid Credentials!" });
      }
    } catch (err) {
      console.log(err);
    }
    return
  });

  router.get(`/user`, authenticate, (req, res) => {
    console.log("nfrbioberiobh")
    res.send(req.rootUser);
  });

  module.exports = router;