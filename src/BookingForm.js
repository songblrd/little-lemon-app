import React, { useState } from 'react'

const BookingForm = (props) => {

  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [setOccasion] = useState("");
  const [guests ,setGuests] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.SubmitForm(e);
  }

  const handleDateChange = (e) => {
    setDate(e);
  }

  const handleGuestsChange = (e) => {
    setGuests(e);
  }

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]


  return (
    <section className='bookingform'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          
          <div>
            <label htmlFor="bookdate">Choose Date:</label>
            <input id='bookdate' type="date" value={date} onChange={e => handleDateChange(e.target.value)} required/>
          </div>
          
          <div>
            <label htmlFor="booktime">Choose Time:</label>
            <select name="" id="booktime" value={times} onChange={e => setTimes(e.target.value)} required>
              <option>Select a Time</option>
              {
                availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
              }
            </select>
          </div>
          
          <div>
            <label htmlFor="bookguests">Number of Guests:</label>
            <input type="number" id='bookguests' min={1} placeholder="1" value={guests} onChange={e => handleGuestsChange(e.target.value)} required/>
          </div>
         
          <div>
            <label htmlFor="bookoccasion">Occasion:</label>
            <select name="" id="bookoccasion" value={setOccasion} onChange={e => setOccasion(e.target.value)} required>
              <option value="">Birthday</option>
              <option value="">Anniversary</option>
            </select>
          </div>
        
          <div className='reservationbutton'>
            <button>Reserve a table</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default BookingForm