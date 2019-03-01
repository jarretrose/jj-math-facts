import React from 'react'

const MathCube = () =>
  <section className="cube-wrap">
    <div className="math-cube">
      <div className="face front">
        <i className="fas fa-plus"></i>
      </div>
      <div className="face right">
        <i className="fas fa-minus"></i>
      </div>
      <div className="face back">
        <i className="fas fa-times"></i>
      </div>
      <div className="face left">
        <i className="fas fa-divide"></i>
      </div>
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
  </section>

export default MathCube;