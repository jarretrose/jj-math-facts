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
      selectedCategory: 'Please Choose A Category'
    }
  }

  handleClick = (mathButton) => {
    this.setState({selectedCategory: mathButton})

    let addStyle = document.getElementById('add-nav-button').classList
    let subStyle = document.getElementById('sub-nav-button').classList
    let multStyle = document.getElementById('mult-nav-button').classList
    let divStyle = document.getElementById('div-nav-button').classList

    mathButton === 'addition' ? addStyle.add('selected-math') : addStyle.remove('selected-math')
    mathButton === 'subtraction' ? subStyle.add('selected-math') : subStyle.remove('selected-math')
    mathButton === 'multiplication' ? multStyle.add('selected-math') : multStyle.remove('selected-math')
    mathButton === 'division' ? divStyle.add('selected-math') : divStyle.remove('selected-math')
  }

  render() {

    return (
      <Fragment>
        <section className='solve-main'>
          <h1>Solve It!</h1>
          <button className='button-math' id='add-nav-button' onClick={() => this.handleClick('addition')}><i className="fas fa-plus"></i></button>
          <button className='button-math' id='sub-nav-button' onClick={() => this.handleClick('subtraction')}><i className="fas fa-minus"></i></button>
          <button className='button-math' id='mult-nav-button' onClick={() => this.handleClick('multiplication')}><i className="fas fa-times"></i></button>
          <button className='button-math' id='div-nav-button' onClick={() => this.handleClick('division')}><i className="fas fa-divide"></i></button>
        </section>

        <section className='solve-work'>
          <SolveWorkSpace category={this.state.selectedCategory}/>
        </section>
      </Fragment>
    )
  }
}

export default Solve;