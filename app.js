// external import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/userRouter");
const inboxRouter = require("./router/inboxRouter");

// internal import
const {notFoundHandler, errorHandler}=require("./middlewares/common/errorHandler");


const app = express();
dotenv.config();


// databasde connection
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("database connection successful"))
    .catch((err)=>console.log(err));


// request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname,"public" )));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use('/', loginRouter);
app.use('/users', userRouter);
app.use('/inbox', inboxRouter);

// error handler
// 404 not found handler
app.use(notFoundHandler);
// common error handler
app.use(errorHandler);

app.listen(process.env.PORT, ()=>{
    console.log(`app.listening to port ${process.env.PORT}`);
})



