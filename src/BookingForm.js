import React, { useState } from 'react'

const BookingForm = (props) => {

  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [setGuests] = useState("");
  const [setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  }

  const handleDateChange = (e) => {
    setDate(e);
  }

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

  return (
    <section className='booking-form'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          
          <div>
            <label htmlFor="book-date">Choose Date:</label>
            <input id='book-date' type="date" value={date} onChange={e => handleDateChange(e.target.value)} required/>
          </div>
          
          <div>
            <label htmlFor="book-time">Choose Time:</label>
            <select name="" id="book-time" value={times} onChange={e => setTimes(e.target.value)} required>
              <option>Select a Time</option>
              {
                availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
              }
            </select>
          </div>
          
          <div>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input type="number" id='book-guests' min={1} placeholder="1" onChange={e => setGuests(e.target.value)} required/>
          </div>
         
          <div>
            <label htmlFor="book-occasion">Occasion:</label>
            <select name="" id="book-occasion" onChange={e => setOccasion(e.target.value)} required>
              <option value="">Birthday</option>
              <option value="">Anniversary</option>
            </select>
          </div>
        
          <div className='reservation-button'>
            <button>Reserve a table</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default BookingForm