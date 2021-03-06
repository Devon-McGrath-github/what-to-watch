var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

// var movies = require('./routes/movies_to_watch')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:8080'
}))
app.use(express.static(path.join(__dirname, 'static')))
  // app.use('/movies', movies)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
