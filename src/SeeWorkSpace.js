import React, { Component, Fragment } from 'react'

class SeeWorkSpace extends Component {

  render() {
    const { category } = this.props
    console.log(category)
    return (
      <Fragment>
        <section className='see-work-space'>
          <h1>{category.toUpperCase()}</h1>
        </section>
      </Fragment>
    )
  }
}

export default SeeWorkSpace;