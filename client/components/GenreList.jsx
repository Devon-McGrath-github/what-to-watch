import React from 'react'

export default React.createClass({

    getInitialState(){
      return {
        value: 'select'
      }
    },

    change(event){
      this.setState({
        value: event.target.value
      })
    },

    render() {
        return (
          <select onChange={this.change} value={this.state.value}>
          {this.props.genreList.map((genre) => {
        return <option value={genre.id}>{genre.name}</option>
      })}
          </select>
        )
    }

})
