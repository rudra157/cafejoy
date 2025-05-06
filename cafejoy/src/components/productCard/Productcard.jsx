import React from 'react'
import './Productcard.css'

const Productcard = (props) => {
  return (
    <div className='product_box'>
      <img src={props.image} alt="" />
      <div className="description">
        <h2>{props.name}</h2>
        <div className="price">
          {props.dis_price}
          <span>{props.price}</span>
          <p className='para'>{props.description}</p>
        </div>
        <button className="btn">Buy now</button>
      </div>
    </div>
  )
}

export default Productcard
