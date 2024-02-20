import React from 'react'
import recipes from './Recipes'

const Dishes = () => {
  return (
    <section className='dishescontainer'>
      <div className='dishesheader'>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className='dishes'>
        {
          recipes.map(recipes =>
            <div key={recipes.id} className='dishesitems'>
              <img src={recipes.image} alt="Recipe portrait" />
              <div className='dishesdetails'>
                <div className='dishesheader'>
                  <h5>{recipes.title}</h5>
                  <p>${recipes.price}</p>
                </div>
                <p className='dishesdescription'>{recipes.description}</p>
                <button className='orderbtn'>Order A Delivery</button>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Dishes