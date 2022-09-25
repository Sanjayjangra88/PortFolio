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
            <h4>My Portfolio</h4>
        </div>
        <div className="container grid">
            {Portfolio_data.map((ele,index)=>{
                return <Card key={index} category={ele.category} totalLike={ele.totalLike}title={ele.title}image={ele.image}/>
            })}
        </div>
    </div>
 </section>
      
    </>
  )
}

export default Portfolio
