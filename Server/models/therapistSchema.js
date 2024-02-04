const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Int32 } = require("mongodb");

//Defining user datatypes
const therapistSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  journal: [
    {
        date: {
            type: String,
            require: true,
        },
        text: {
            type: String,
            require: true,
        }

    }
  ],
  post: [
    {
        date: {
            type: String,
            require: true,
        },
        text: {
            type: String,
            require: true,
        },
        comments: [
            {
                text: {
                    type: String,
                    require: true,
                }
            }
        ],
        like: {
            type: Int32,
        }
    }
  ],
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});


// securing password
therapistSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// generating Auth token
therapistSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Therapist = mongoose.model("THERAPIST", therapistSchema);

module.exports = Therapist;