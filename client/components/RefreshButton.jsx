import React from 'react'

export default React.createClass({
  render() {
    console.log(this.props);
    return (
      <div id="button">
        <p><a href='#' onClick={this.props.refresh}>I DON'T WANT TO WATCH THAT</a></p>
      </div>
    )
  }
})
