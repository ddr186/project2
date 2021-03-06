const express = require('express')
const Blog = require('../models/blogs.js')
const router = express.Router()
const faker = require('faker')


router.delete('/:id', (req, res) => {
  Blog.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/blogs')
  })
})

router.get('/:id/edit', (req, res) => {
  Blog.findById(req.params.id, (error, foundBlog) => {
    res.render('edit.ejs', {
      blog: foundBlog

    })
  })

})


router.post('/', (req, res) => {
    Blog.create(req.body, (error, createBlog) => {
        res.redirect('/blogs')
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
  res.render('new.ejs')
})

router.get('/seed', (req, res) => {
    Blog.create(
        [{
              title: faker.lorem.words(),
              date: '2020-08-02',
              entry: faker.lorem.paragraphs(),

            },
            {
              title: faker.lorem.words(),
              date: '2020-08-02',
              entry: faker.lorem.paragraphs(),

            },
            {
              title: faker.lorem.words(),
              date: '2020-08-02',
              entry: faker.lorem.paragraphs(),

            }
        ],
        (err, data) => {
            res.send(data);
        }
    )
});

router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (error, foundBlog) => {
        res.render(
            'show.ejs',
            {
                blog: foundBlog

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
