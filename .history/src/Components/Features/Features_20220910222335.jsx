import React from 'react'
import Card from './Card'
import './features.css'

const Features = () => {
  return (
    <>
    <section className='features top'id='features'>
        <div className="container">
            <div className="heading">
                <h4>Features</h4>
                <h1>What  I do</h1>
            </div>
            <div className="content grid">
             <Card/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Features