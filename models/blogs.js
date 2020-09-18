const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  
    article: String,
    entry: String,

  }
);

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
