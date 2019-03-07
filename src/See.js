import React, { Component, Fragment } from 'react'
import SeeWorkSpace from './SeeWorkSpace';

class See extends Component {
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
        <section className='see-main'>
          <h1>See It!</h1>
          <button className='button-math' id='add-nav-button' onClick={() => this.handleClick('addition')}><i className="fas fa-plus"></i></button>
          <button className='button-math' id='sub-nav-button' onClick={() => this.handleClick('subtraction')}><i className="fas fa-minus"></i></button>
          <button className='button-math' id='mult-nav-button' onClick={() => this.handleClick('multiplication')}><i className="fas fa-times"></i></button>
          <button className='button-math' id='div-nav-button' onClick={() => this.handleClick('division')}><i className="fas fa-divide"></i></button>
        </section>

        <section className='see-work'>
          <SeeWorkSpace category={this.state.selectedCategory}/>
        </section>
      </Fragment>
    )
  }
}

export default See;