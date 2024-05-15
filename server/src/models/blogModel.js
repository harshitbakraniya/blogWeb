const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        require,
    },
    description:  {
        type: String,
        require,
    },
    image:  {
        type: String,
    },
    comments: {
        type: Array,
    }
})

const BlogModel = new mongoose.model('blogs', BlogSchema);

module.exports = BlogModel;