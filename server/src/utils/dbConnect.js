const mongoose = require("mongoose");

const connectToDB = () => {
    mongoose.connect("mongodb://localhost:27017/blogapp").then(() => {
        console.log("connected successfully");
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectToDB;