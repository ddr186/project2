// const express = require('express')
// const users = express.Router()
// const bcrypt = require('bcrypt')
// const User = require('../models/users.js')
//
// users.get('/new', (req, res) => {
//   res.send('users/new.ejs', {
//     currentUser: req.sessions.currentUser
//   })
//   })
//
//
// users.post('/', (req, res) => {
//   req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
//   User.create(req.body, (err, createdUser) => {
//     console.log('user is created', createdUser);
//     res.redirect('/blogs')
//   })
// })
//
//
// module.exports= users
