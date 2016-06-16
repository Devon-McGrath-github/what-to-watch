import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                {this.props.movie.map(function (movie){
                    return <div>
                        <p> {movie.title} </p>
                        <img src={movie.poster_path}></img>
                    </div>
                })}
            </div>
        )
    }
})
