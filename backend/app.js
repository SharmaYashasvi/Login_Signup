//requiring express
const express = require("express");
// cookieparser for storing user info into cookies
const cookieParser = require("cookie-parser");
// for post request
const bodyParser = require("body-parser");
// for uploading photo
const fileUpload = require("express-fileupload");

const path = require("path");

// defining app
const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload());

const errorMiddleware = require("./middleware/error");
// import user routes
const user = require("./routes/userRoute");
app.use("/api/v1", user);



app.use(express.static("backend/public/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("backend/public/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);
module.exports = app;