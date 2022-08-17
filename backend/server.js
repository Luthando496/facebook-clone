const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const products = require("./Routes/ProductsRoutes.js");
const order = require("./Routes/OrderRoutes.js");
const morgan = require("morgan");
const users = require("./Routes/UserRoutes.js");
const err = require("./Middlewares/errors.js");
const path = require("path");
const { resolve } = require("path");
const colors = require("colors");
const { connectDB } = require("./Utils/DB.js");

const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan("dev"));

// app.use('/api/shop/products',products)
app.use("/api/v1/facebook/", users);
// app.use('/api/shop',order)

// if(process.env.NODE_ENV === 'PRODUCTION'){
//     app.use(express.static(path.join(__dirname,'../front/build')))

//     app.get('*', (req,res)=>{
//         res.sendFile(resolve(__dirname,'../front/build/index.html'))
//     })
// }

// MIDDLEWARE TO HANDLE MIDDLEWARES
app.use(err);

// if(process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({path:'../config.env'})

// console.log(process.env)

connectDB();

// UNHANDLED EXCEPTIONS

process.on("uncaughtException", (err) => {
  console.log("uncaught Exception Server Shutting Down");
  console.log(`ERROR = ${err.stack}`);
  process.exit(1);
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(
    `Server is Running At ${process.env.PORT} In ${process.env.NODE_ENV}`.yellow
      .bold
  );
});

// unhandledRejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR REJECTION  ${err.message}`);
  console.log("SERVER SHUTTING DOWN");

  server.close(() => {
    process.exit(1);
  });
});
