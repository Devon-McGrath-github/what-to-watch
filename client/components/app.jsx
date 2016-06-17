import React from 'react'

import api from '../api'
import MoviePoster from './MoviePoster'
import Header from './Header'

export default React.createClass({
  getInitialState () {
    return {
      error: null,
      movies: {results: []}
    }
  },

  componentDidMount () {
    api.getMovies(this.renderMovies)
  },

  renderMovies (err, movies) {
    var item = movies.results[Math.floor(Math.random()*movies.results.length)]
    var arr = [item]
    console.log(item, 'item');

    this.setState({
      error: err,
      movies: {results: arr}
    })
  },

  refreshMovie () {
    api.getMovies(this.renderMovies)
  },

  render() {
    console.log(this.state.movies.results, "state here");
    return (
        <div className="row">
          <div className="col-sm-3"></div>

          <div className="col-sm-6">
              <Header />
              <MoviePoster movie={this.state.movies.results} refresh={this.refreshMovie}/>
          </div>
          <div className="col-sm-3"></div>
      </div>
      )
    }

})
