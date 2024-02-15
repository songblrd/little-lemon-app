import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookingPage from './BookingPage'
import Middlesection from './Middlesection'

const Main = () => {
  return (
    <main>
      <Routes>
         <Route path='/' element={<Middlesection />}></Route>
         <Route path='/booking' element={<BookingPage/>}/>
      </Routes>
    </main>
  )
}

export default Main
