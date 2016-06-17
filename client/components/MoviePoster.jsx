import React from 'react'
import MovieItemInfo from './MovieItemInfo'

export default React.createClass({
    render() {
        return (
            <div>
                {this.props.movie.map(function (movie){
                    return (
                    <div id="movie_info_container">
                        <h2> {movie.title} </h2>
                        <img class='movie_poster' src={"http://image.tmdb.org/t/p/w500//" + movie.poster_path}></img>
                        <p> {movie.overview}</p>
                        <p> {movie.vote_average}/10</p>
                    </div>
                )
                })}
            </div>
        )
    }

})
