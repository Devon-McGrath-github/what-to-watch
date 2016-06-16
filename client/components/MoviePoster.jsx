import React from 'react'

export default React.createClass({
    render() {
        console.log('moviePoster rendered')
        console.log(this.props.movie, 'moviePoster this.props.movie');
        return (
            <div>
                {this.props.movie.map(function (movie){
                    return <p>
                        {movie.title} </p>
                })}
            </div>
        )
    }
})
