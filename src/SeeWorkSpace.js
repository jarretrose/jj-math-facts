import React, { Component, Fragment } from 'react'
import Card from './Card'

class SeeWorkSpace extends Component {

  render() {
    const { category } = this.props
    console.log(category)
    return (
      <Fragment>
        <section className='work-space'>
          <h1>{category.toUpperCase()}</h1>
          <Card />
        </section>
      </Fragment>
    )
  }
}

export default SeeWorkSpace;