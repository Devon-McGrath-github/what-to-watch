import React from 'react'
import MovieItemInfo from './MovieItemInfo'

export default React.createClass({
    render() {
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
