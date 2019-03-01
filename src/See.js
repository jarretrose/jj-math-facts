import React, { Component, Fragment } from 'react'
import SeeWorkSpace from './SeeWorkSpace';

class See extends Component {
  
  handleClick = (event) => { console.log(event.target.value) }

  render() {
    const { handleClick } = this

    return (
      <Fragment>
        <section className='see-main'>
          <h1>See It!</h1>
          <p>Please choose a category:</p>
          <button onClick={(e) => handleClick(e)} value='addition'>Addition</button>
          <button onClick={(e) => handleClick(e)} value='subtraction'>Subtraction</button>
          <button onClick={(e) => handleClick(e)} value='multiplication'>Multiplication</button>
          <button onClick={(e) => handleClick(e)} value='division'>Division</button>
        </section>

        <section className='see-work'>
          <SeeWorkSpace />
        </section>
      </Fragment>
    )
  }
}

export default See;