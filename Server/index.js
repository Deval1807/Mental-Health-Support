const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
var cors = require('cors')  

app.use(cors()) 
app.use(cookieParser());
dotenv.config({path:'./config.env'});

require('./db/connection');

app.use(express.json());

app.use(require('./router/userRouter'));



const PORT = process.env.PORT; 
 

app.listen(PORT, ()=>{
    console.log(`server is runging on port no. ${PORT}`)
}); 