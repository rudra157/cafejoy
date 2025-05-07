import React from 'react'
import Productcard from './Productcard'
import burgur_Img from '../images/burger.jpg'
import coffee from '../images/coffee.webp'
import icecream from '../images/icecream.webp'
import './Productcard.css'

const Card = () => {
  return (
    <div className='product'>
      <Productcard
        image={burgur_Img}
        name="Burger"
        dis_price='₹59.00'
        price='₹79.00'
        description='A juicy cheeseburger with melted cheese, fresh toppings, and a toasted bun.'
      />
      <Productcard
        image={coffee}
        name="coffee"
        dis_price='₹120.00'
        price='₹179.00'
        description='A warm hug in a cup — where creamy beautiful designed coffee meets a heart of art.'
      />
      <Productcard
        image={icecream}
        name="icecream"
        dis_price='₹149.00'
        price='₹199.00'
        description='A masterpiece where ice cream, chocolate, and crunch collide in sweet harmony.' />
    </div>
  )
}

export default Card 