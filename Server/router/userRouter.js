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
  // console.log(req)
  const { name, email, password, age, aname } = req.body;

  if (!name || !email || !password || !age) {
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
        aname,
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
      console.log("token", token);

      if (!passwordMatch) {
        res.status(400).json({ message: "Invalid Credentials!" });
      } else {
        res.status(200).json({ token: `${token}` });
      }
    } else {
      res.status(400).json({ message: "Invalid Credentials!" });
    }
  } catch (err) {
    console.log(err);
  }
  return
});

router.post(`/newpost`, async (req, res) => {
  try {
    const { aname, text, uid } = req.body;
    console.log(req.body);
    if (!aname || !text) {
      return res.json({ error: "Empty Data!" });
    }

    const date = new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'});
    const userPost = await User.findOne({ _id: uid });
    
      if (userPost) {
        const addEve = await userPost.addPost(
          aname,
          date,
          text,
        );
  
        await userPost.save();
  
        res.status(200).json({ message: "Post added" });
      } else {
        res.status(400).json({ message: "Post not added" });
      }
    
  } catch (error) {
    console.log(error);
  }
  return
});



router.post(`/user`, authenticate, (req, res) => {
  console.log("nfrbioberiobh")
  res.send(req.rootUser);
});

module.exports = router;