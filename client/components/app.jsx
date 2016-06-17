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

  refreshMovie () {
      api.getMovies(this.renderMovies)
  },

  render() {
    console.log(this.state.movies.results, "state here");
    return (
          <div id="main_container">
              <h1>WHAT THE FUCK SHOULD I WATCH?</h1>
              <MoviePoster movie={this.state.movies.results}/>
              <p><a href='#' onClick={this.refreshMovie}>I DON'T WANT TO WATCH THAT SHIT</a></p>
              <button onClick={this.refreshMovie}>refresh button</button>
          </div>
      )
    }

})
