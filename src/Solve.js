import React, { Component, Fragment } from 'react'
import SolveWorkSpace from './SolveWorkSpace'


class Solve extends Component {
  constructor() {
    super()
    this.state = {
      selectedCategory: 'Please Choose A Category'
    }
  }

  render() {
    return (
      <Fragment>
        <section className='solve-main'>
          <h1>Solve It!</h1>
          <button className='button-math' id='add-nav-button'><i className="fas fa-plus"></i></button>
          <button className='button-math' id='sub-nav-button'><i className="fas fa-minus"></i></button>
          <button className='button-math' id='mult-nav-button'><i className="fas fa-times"></i></button>
          <button className='button-math' id='div-nav-button'><i className="fas fa-divide"></i></button>
        </section>

        <section className='solve-work'>
          <SolveWorkSpace category={this.state.selectedCategory}/>
        </section>
      </Fragment>
    )
  }
}

export default Solve;