const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
  {

    article: {type: String},
    entry: {type: String},

  }
);

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
