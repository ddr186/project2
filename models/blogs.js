const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
  {

    title:  String,
    date: Date,
    entry:  String

  }
);

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
