import React from 'react'
import { Link } from 'react-router-dom'

const Middlesection = () => {
  return (
    <section className='Middlesection'>
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <img src="restauranfood.jpg" alt="Banner Img" className='Middlesection-img-mobile' />
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">
          <button aria-label='On Click'>Book a Table</button>
        </Link>
        <img src='restaurant.jpg' alt="Banner Img" className='Middlesection-img' />
      </div>
    </section>
  )
}

export default Middlesection