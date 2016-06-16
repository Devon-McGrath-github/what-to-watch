import React from 'react'
import MovieItemInfo from './MovieItemInfo'

export default React.createClass({
    randomMovie() {
        var item = this.props.movie[Math.floor(Math.random()*items.length)]
        return item
    },

    render() {
        console.log('moviePoster rendered')
        console.log(this.props.movie, 'moviePoster this.props.movie');
        return (
            <div>
                {this.props.movie.map(function (movie){
                    return <div>
                        <p> {movie.title} </p>
                        <img src={"http://image.tmdb.org/t/p/w500//" + movie.poster_path}></img>
                    </div>
                })}
            </div>
        )
    }

})
