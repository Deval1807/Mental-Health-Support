const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

//authenticaticating user by jwt token.
const authenticate = async (req, res, next) => {
  console.log("middleware", req.body);
  try {
    const token = req.body.jwtoken;
    console.log(token);
    const verifyToken = jwt.verify(token, process.env.KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized:No token provided");
    console.log(err);
  }
};

module.exports = authenticate;