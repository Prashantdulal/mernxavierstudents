const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userSchema");
require("./db/conn.js");
const path = require("path");
const app = express();
var cors = require('cors');
app.use(cors());
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// const DB = "mongodb+srv://admin:admin@cluster0.1e1vq4l.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(require("./router/auth"));
// app.get("/", (req, res) => {
//   res.send("This is home");
// });

const static_path = path.join(__dirname, "../public");
// // console.log(path.join(__dirname, "../public"));
app.use(express.static(static_path));

app.get("/users", (req, res) => {
  res.send("This is users");
});

const PORT  = process.env.PORT || 5000;


if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  
}

 

if ( process.env.NODE_ENV == "production"){

  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })


}


app.listen(PORT, () => {
  console.log(`serverr runningg!!`);
});

