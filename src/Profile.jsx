import React, { useContext } from 'react'
import {MyWebContext} from './Main'
import { Link } from 'react-router-dom'
import './Profile.css'
import profile from'./images/oggy.jpg'

function Profile() {
  const {loginvar, profileData,streak} = useContext(MyWebContext)
  console.log(streak)
  
  return (
    
    <>
    {
      (loginvar)?
    <div id="profile-wrapper">
      <div className="profile-pic-username">
        <div className="picture" style={{ backgroundImage: 'url(' + profile + ')' }} ></div>
        <h1>{'hey...'+profileData}</h1>
        <h4>streak=:</h4>
        <Link to='/payment'>Tasks</Link>
      </div>
    </div>
    :'not found'}
    </>
  )
}

export default Profile
