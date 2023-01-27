const Post = require("../models/postSchema");
const PostAll = async (req, res) => {
  const Postfind = await Post.find({});
  res.status(200).json(Postfind);
};
const postNew = async (req, res) => {
  const postSchema = new Post({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: `http://localhost:9000/postimage/${req.file.filename}`,
  });
  try {
    const postCreate = await Post.create(postSchema);
    res.status(200).json(postCreate);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const postDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const findOnePost = await Post.findByIdAndDelete({ _id: id });
    res.status(200).json(findOnePost);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const postUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const updatepost = await Post.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
        ...(req.file
          ? { image: `http://localhost:9000/postimage/${req.file.filename}` }
          : req.body.image),
      }
    );
    res.status(200).json(updatepost);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const postGetUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const getOnePost = await Post.findOne(
      { _id: id },
      {
        ...req.body,
      }
    );

    res.status(200).json(getOnePost);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  PostAll,
  postNew,
  postDelete,
  postUpdate,
  postGetUpdate,
};
