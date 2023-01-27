const express = require("express");

const {PostAll,postNew,  postDelete ,  postUpdate ,postGetUpdate} = require("../controllers/postController");
const multer = require('multer')
const storage = multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null, `./images`)
  },
  filename:(req,file,callback)=>{
    console.log(req.file)
    callback(null, file.originalname)
  }
})
const uploadpost = multer({storage:storage})
const PostRoutes = express.Router();
//get all the Products
PostRoutes.get("/", PostAll);
PostRoutes.post("/",uploadpost.single('image'), postNew);
PostRoutes.delete("/:id", postDelete);
PostRoutes.put("/:id",uploadpost.single('image'),  postUpdate);
PostRoutes.get("/:id",   postGetUpdate);


module.exports = PostRoutes;
