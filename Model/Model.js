const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required:true
        },
        content: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
    }
)
const Blog = mongoose.model('blog',blogSchema)
module.exports = Blog