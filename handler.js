const serverless = require("serverless-http");
const express = require("express");
const app = express();

//body parser
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

//we need to connect to db
const config = require('./config/config.json');

// we need to connect to attributes
const queryInterface = require('./migrations/20220505123450-create-user');

// const User = require("./models/user");
const userRouter = require("./routers/route");
app.use(userRouter);

app.use(express.json());

app.get("/user", async (req, res) => {
  try {
    // const data = await User.findAll();.
    console.log("called");
    // return res.statusCode(200).json({ "Message": "This is a test" });

  } catch (err) {
    res.send(err);

  }

})



// // get
// app.get("/user", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from root!",
//   });
// });

// //get by id
// app.get("/user/:id", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from get..!",
//   });
// });

// //post
// app.post("/user", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from post..!",
//   });
// });

// //put
// app.put("/user", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from put..!",
//   });
// });

// //delete
// app.delete("/user", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from delete..!",
//   });
// });



// app.use((req, res, next) => {
//   return res.status(404).json({
//     error: "Not Found",
//   });
// });

module.exports.handler = serverless(app);
