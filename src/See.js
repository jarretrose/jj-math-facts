import React, { Component, Fragment } from 'react'
import SeeWorkSpace from './SeeWorkSpace';

class See extends Component {
  constructor() {
    super()
    this.state = {
      category: 'Please Choose A Category'
    }
  }

  handleClick = (event) => {
    this.setState({category: event.target.value})
  }

  render() {
    const { handleClick } = this

    return (
      <Fragment>
        <section className='see-main'>
          <h1>See It!</h1>
          <button onClick={(e) => handleClick(e)} value='addition'>Addition</button>
          <button onClick={(e) => handleClick(e)} value='subtraction'>Subtraction</button>
          <button onClick={(e) => handleClick(e)} value='multiplication'>Multiplication</button>
          <button onClick={(e) => handleClick(e)} value='division'>Division</button>
        </section>

        <section className='see-work'>
          <SeeWorkSpace category={this.state.category}/>
        </section>
      </Fragment>
    )
  }
}

export default See;