import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookingPage from './BookingPage'

const Main = () => {
  return (
    <main>
      <Routes>
         <Route path='/booking' element={<BookingPage/>}/> 
      </Routes>
    </main>
  )
}

export default Main
