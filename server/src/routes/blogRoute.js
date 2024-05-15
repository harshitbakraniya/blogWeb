const express = require("express");
const routers = express.Router();
const {addBlog, getBlogs} = require("../controllers/blogController.js")

routers.get("/blogs", getBlogs);
routers.post("/blogs", addBlog);

module.exports = routers;