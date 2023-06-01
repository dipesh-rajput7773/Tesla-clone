import React from 'react'
import './section.css'

function Section(props) {
  return (
    <section style={{backgroundImage:"url( images/"+props.backgraund+")"}}>
      <div className='modelName'>
        <h1>{props.name}</h1>
        <p>{props.tagline}</p>

      </div>
      <div className='cta'>
        <div className='buttons'>
          {props.leftbtn && <a href='#' className='left'>{props.leftbtn}</a>}

          {props.rightbtn && <a href='#' className='right'>{props.rightbtn}</a>}
        </div>
        {props.arrow && <img src='images/down-arrow.png' alt='down arrow'></img>}
      </div>
    </section>
  )
}

export default Section