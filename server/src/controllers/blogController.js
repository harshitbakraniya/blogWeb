const Blog = require("../models/blogModel");

//add blog
const addBlog = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    console.log(title, description, image);
    const newBlog = new Blog({ title, description, image });

    const data = await newBlog.save();

    if(data){
        res.status(200).send({ message: "Blog Added Successfully", data });
    }
    

  } catch (err) {
    console.log(err);
  }
};

//get blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length) {
      res.send({ message: "Success", data: blogs });
    }
    res.status(404).send({ message: "Blogs not found" });
  } catch (error) {
    console.log(error);
  }
};

//add comment
const addComment = async(req, res) => {
    try{
        
    }catch(error){

    }
}

module.exports = {
  addBlog,
  getBlogs,
};
