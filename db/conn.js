const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const db=process.env.DATABASE;


mongoose
  .connect(db, {
    useNewUrlParser: true,
    // useCreateIndex:true,
    useUnifiedTopology: true,
    // useFindAndModify:false
  })
  .then(() => console.log("connecteddd "))
  .catch((err) => console.log(err));
