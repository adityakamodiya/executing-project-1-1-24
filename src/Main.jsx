import React, { useState } from 'react'
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontPage from './FrontPage';
import Vision_Missions from './Vision_Missions';
import Log_in from './Log_in';
import Tasks from './Tasks';
import Sign_Up from './Sign_Up';
import Profile from './Profile';
import Payment from './Payment';

export const MyWebContext = createContext(null)

function Main() {
  // console.log(MyWebContext)
  const [profileData, setprofileData] = useState('')
  const [loginvar, setloginvar] = useState(false)
  const [streak, setstreak] = useState('')
  return (
    <>

      <MyWebContext.Provider value={{ profileData, setprofileData, loginvar, setloginvar, streak, setstreak }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FrontPage />}></Route>
            <Route path='/signup' element={<Sign_Up />}></Route>
            <Route path='/login' element={<Log_in />}></Route>
            <Route path='/profile' element={<Profile />} />
            <Route path='/vision_and_mission' element={<Vision_Missions />}>
            </Route>
            <Route path='/tasks' element ={<Tasks/>}></Route> 
            <Route path='/payment' element={<Payment />}></Route>
            <Route path='/signup' element={<Sign_Up />}></Route>
            <Route path='/home' element={<FrontPage />}></Route>

          </Routes>
        </BrowserRouter>
      </MyWebContext.Provider>
    </>
  )
}

export default Main
