import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className=" box box_shadow">
        <div className="title_content d_flex">
            <div className="title">
                <h2>{props.title}</h2>
                <span>{props.year}</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
