const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const productRouter = require("./routes/product");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, function (error) {
  if (error) {
    console.log("error" + error);
  } else {
    console.log("MongoDB connected succesfully!!");
  }
});

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/product", productRouter);

app.listen(PORT,()=>console.log('Server is started at port ',PORT));
