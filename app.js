const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require("./router/loginRouter.js");
const usersRouter = require("./router/usersRouter.js");
const inboxRouter = require("./router/inboxRouter.js");


// internal imports
const {
    notFoundHandler,
    errorHandler,
  } = require("./middlewares/common/errorHandler.js");

const app = express();
dotenv.config();

//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=> console.log('Database connection established'))
.catch(err=> console.log(err))

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//set view engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static(path.join(__dirname,"public")));

//parse Cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/",loginRouter);
app.use("/users",usersRouter);
app.use("/inbox",inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);



app.listen(process.env.PORT,()=>{
    console.log(`Listening at port http://localhost:${process.env.PORT}`);
})