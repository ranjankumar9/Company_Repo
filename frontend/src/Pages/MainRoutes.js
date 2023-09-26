import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Formpage from './Formpage'
import Resultpage from './Resultpage'

const MainRoutes = () => {
  return (
    <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='/home/form' element={<Formpage />} />
        <Route path='/home/form/result' element={<Resultpage />} />
    </Routes>
  )
}

export default MainRoutes