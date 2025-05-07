import React from 'react'
import Productcard from './Productcard'
import burgur_Img from '../images/burger.jpg'
import coffee from '../images/coffee.webp'
import icecream from '../images/icecream.webp'
import choco from '../images/choco.jpg'
import masala from '../images/masala_garlic.jpg'
import pancakeStack from '../images/GourmetPancakeStack.jpg'
import falafelWrap from '../images/FalafelWrapCombo.jpg'
import veggiePasta from'../images/VeggieCheesePasta.jpg'
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
        description='A masterpiece where ice cream, chocolate, and crunch collide in sweet harmony.'
      />

      <Productcard
        image={choco}
        name="Choco"
        dis_price='₹149.00'
        price='₹199.00'
        description='it is a premium item with quality ingredients or larger portion sizewith a rich and smooth.'
      />
       
       <Productcard
        image={masala}
        name="Masala Grilled Sandwich"
        dis_price='₹129.00'
        price='₹149.00'
        description='A spicy, cheesy Indian-style sandwich loaded with vegetables and topped with creamy mayo and herbs.'
      />

      <Productcard
        image={pancakeStack}
        name="Gourmet Pancake Stack"
        dis_price='₹179.00'
        price='₹199.00'
        description='Fluffy pancakes layered with berry compote, ice cream, and sprinkled with crumble dust.'
      />

      <Productcard
        image={falafelWrap}
        name="Falafel Wrap Combo"
        dis_price='₹149.00'
        price='₹179.00'
        description='Middle Eastern-style falafel wrap served with a side of crispy, golden fries.'
      />

      <Productcard
        image={veggiePasta}
        name="Veggie Cheese Pasta"
        dis_price='₹229.00'
        price='₹259.00'
        description='Cheesy oven-baked pasta with bell peppers, corn, and rich creamy.'
      />

    </div>
  )
}

export default Card 