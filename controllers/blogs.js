const express = require('express')
const Blog = require('../models/blogs.js')
const router = express.Router()


router.get('/seed', (req, res) => {
    Blog.create(
        [{
                date: 'nuclear reactor',
                post: 'reactor malfunction, Data threw himself in it',

            },
            {
                date: 'computer system',
                post: 'spawk threw up on the computers',

            },
            {
                date: 'wings',
                post: 'hit a rough patch of asteroids',

            }
        ],
        (err, data) => {
            res.send(data);
        }
    )
});


router.get('/' , (req, res) => {
  Blog.find({}, (error, allBlogs) => {
        res.render(
            'index.ejs',
            {
                blog: allBlogs

            }
        );
    })
});




module.exports = router;
