import React from 'react'
import MovieItemInfo from './MovieItemInfo'
import RefreshButton from './RefreshButton'

export default React.createClass({

  render() {
    return (
      <div>
        {this.props.movie.map(function (movie){
          return (
            <div id="movie_info_container">

              <div className="col-sm-3 split">
                <h2> {movie.title} </h2>
                <p> {movie.overview}</p>
                <p> {movie.vote_average}/10</p>
                <RefreshButton refresh={this.props.refresh}/>
              </div>

              <div className="col-sm-3 split">
                <img className='movie_poster' src={"http://image.tmdb.org/t/p/w500//" + movie.poster_path}></img>
              </div>

            </div>
          )
        })}
      </div>
    )
  }
})
