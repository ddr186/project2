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
                title: 'nuclear reactor',
                date: '2020-08-02',
                entry: 'reactor malfunction, Data threw himself in it',

            },
            {
                title: 'computer system',
                date: '2020-08-02',
                entry: 'spawk threw up on the computers',

            },
            {
                title: 'wings',
                date: '2020-08-02',
                entry: 'hit a rough patch of asteroids',

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
