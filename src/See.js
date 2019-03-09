import React, { Component, Fragment } from 'react'
import SeeWorkSpace from './SeeWorkSpace';

class See extends Component {
  constructor() {
    super()
    this.state = {
      selectedCategory: 'Please Choose A Category'
    }
  }

  render() {
    return (
      <Fragment>
        <section className='see-main'>
          <h1>See It!</h1>
          <button className='button-math' id='add-nav-button'><i className="fas fa-plus"></i></button>
          <button className='button-math' id='sub-nav-button'><i className="fas fa-minus"></i></button>
          <button className='button-math' id='mult-nav-button'><i className="fas fa-times"></i></button>
          <button className='button-math' id='div-nav-button'><i className="fas fa-divide"></i></button>
        </section>

        <section className='see-work'>
          <SeeWorkSpace category={this.state.selectedCategory}/>
        </section>
      </Fragment>
    )
  }
}

export default See;