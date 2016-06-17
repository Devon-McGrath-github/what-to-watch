import request from 'superagent'

var popularMoviesUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc/550&api_key=b6e723876265b349536936ccc2ca2b01'
var genreListUrl = 'http://api.themoviedb.org/3/genre/movie/list?api_key=b6e723876265b349536936ccc2ca2b01'

module.exports = {
  getMovies: getMovies,
  getGenreList: getGenreList
}

function getMovies(callback) {
  request
    .get(popularMoviesUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getGenreList(callback) {
  request
    .get(genreListUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        // console.log("Genre Body", res.body);
        callback(null, res.body)
      }
    })
}
