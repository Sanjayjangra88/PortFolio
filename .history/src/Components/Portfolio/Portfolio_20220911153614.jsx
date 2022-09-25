import React from 'react';
import Card from './Card';
import './portfolio.css';
import Portfolio_data from './Portfolio_data';

const Portfolio = () => {
  return (
    <>
 <section className='portfolio top'id='portfolio'>
    <div className="container">
        <div className="heading text-center">
            <h4>VISIT MY PORTFOLIO AND KEEP AND YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
        </div>
        <div className="container grid">
            {Portfolio_data.map((ele,index)=>{
               
                return <Card key={index}image={ele.image} category={ele.category} totalLike={ele.totalLike} title={ele.title}/>
            })}
        </div>
    </div>
 </section>
      
    </>
  )
}

export default Portfolio
