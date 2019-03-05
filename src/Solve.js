import React, { Component, Fragment } from 'react'
import SolveWorkSpace from './SolveWorkSpace'

/* 
ADDITION
* numbers in addition: addend + addend = sum

SUBTRACTION
minuend (what you start with)
subtrahend (the part being taken away)
difference (the result)
* minuend - subtrahend = difference

MULTIPLICATION
multiplicand (number being multiplied)
multiplier (the number of times it is being added / multiplied)
product (the result or answer)
* multiplicand x multiplier = product

DIVISION
dividend (number being divided)
divisor (the number which the dividend is being divided by)
quotient (the result or answer)
* dividend / divisor = quotient

*/

class Solve extends Component {
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
        <section className='solve-main'>
          <h1>Solve It!</h1>
          <button onClick={(e) => handleClick(e)} value='addition'>Addition</button>
          <button onClick={(e) => handleClick(e)} value='subtraction'>Subtraction</button>
          <button onClick={(e) => handleClick(e)} value='multiplication'>Multiplication</button>
          <button onClick={(e) => handleClick(e)} value='division'>Division</button>
        </section>

        <section className='solve-work'>
          <SolveWorkSpace category={this.state.category}/>
        </section>
      </Fragment>
    )
  }
}

export default Solve;