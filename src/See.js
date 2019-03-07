import React, { Component, Fragment } from 'react'
import SeeWorkSpace from './SeeWorkSpace';

class See extends Component {
  constructor() {
    super()
    this.state = {
      selectedCategory: 'Please Choose A Category'
    }
  }

  handleClick = (category) => {
    this.setState({selectedCategory: category})
  }

  render() {
    const { handleClick } = this

    return (
      <Fragment>
        <section className='see-main'>
          <h1>See It!</h1>
          <button className='button-math' onClick={(e) => handleClick('addition')}><i className="fas fa-plus"></i></button>
          <button className='button-math' onClick={(e) => handleClick('subtraction')}><i className="fas fa-minus"></i></button>
          <button className='button-math' onClick={(e) => handleClick('multiplication')}><i className="fas fa-times"></i></button>
          <button className='button-math' onClick={(e) => handleClick('division')}><i className="fas fa-divide"></i></button>
        </section>

        <section className='see-work'>
          <SeeWorkSpace category={this.state.selectedCategory}/>
        </section>
      </Fragment>
    )
  }
}

export default See;