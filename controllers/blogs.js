const express = require('express')
const Blog = require('../models/blogs.js')
const router = express.Router()


router.delete('/:id', (req, res) => {
  Blog.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/blogs')
  })
})

router.get('/:id/edit', (req, res) => {
  Blog.findById(req.params.id, (error, foundBlog) => {
    res.render('edit.ejs', {
      log: foundBlog
      // ,currentUser: req.session.currentUser
    })
  })

})

router.put('/:id', (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body,{
    new:true
  },
    (err, updateModel) => {
    res.redirect('/blogs')
  })
  // res.send(req.body)
})

router.get('/new', (req, res) => {
  res.render('new.ejs',
  // {currentUser: req.session.currentUser}
  )
})

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

router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (error, foundLog) => {
        res.render(
            'show.ejs',
            {
                blog:foundLog
                // ,currentUser: req.session.currentUser
            }
        );
    })
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
