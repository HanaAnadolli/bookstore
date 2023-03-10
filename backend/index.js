const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect mongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/bookstore')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })



  const favoritebookAPI = require('./routes/favoritebook.route')
  const bookAPI = require('./routes/book.route')
  const contactAPI = require('./routes/contact.route')
  
  const app = express()
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  )
  app.use(cors())
  
  // API
  app.use('/apiF', favoritebookAPI)
  app.use('/api', bookAPI)
  app.use('/apiC', contactAPI)
  
  // Create port
  const port = process.env.PORT || 4000
  const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
  })
  
  // Find 404
  app.use((req, res, next) => {
    next(createError(404))
  })
  
  // error handler
  app.use(function (err, req, res, next) {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
  })
  
  
  // Find 404
  app.use((req, res, next) => {
    next(createError(404))
  })
  
  // error handler
  app.use(function (err, req, res, next) {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
  })
  
