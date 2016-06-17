import React from 'react'

import api from '../api'
import MoviePoster from './MoviePoster'

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


  render() {
    console.log(this.state.movies.results, "state here");
    return (
          <div>
          <h1>hey</h1>
          <MoviePoster movie={this.state.movies.results}/>

          </div>
      )
    }

})
