import React, { Component, Fragment } from 'react'
import Card from './Card'

class SeeWorkSpace extends Component {

  render() {
    return (
      <Fragment>
        <section className='work-space'>
          <h1>{this.props.category.toUpperCase()}</h1>
          <Card />
        </section>
      </Fragment>
    )
  }
}

export default SeeWorkSpace;