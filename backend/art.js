const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const AdminRouter = require('./routes/adminRouter')
const PostRouter = require('./routes/postRouter')
const art = express()
//Middleware
art.use('/postimage', express.static('./images'));

art.use(cors());
art.use(express.json());
art.use("/admin", AdminRouter);
art.use("/admin/post", PostRouter);
art.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    art.listen(process.env.PORT, () => {
      console.log("listening", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });


