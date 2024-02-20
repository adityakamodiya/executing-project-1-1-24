import React, { useContext, useState } from 'react'
import {MyWebContext} from './Main'
import { Link } from 'react-router-dom'
import './Profile.css'
import image1 from './profileImages/img1.jpg'
import image2 from './profileImages/img2.jpg'
import image3 from './profileImages/img3.jpg'
import image4 from './profileImages/img4.jpg'
import image5 from './profileImages/img5.jpg'
// import im from '../../back/UploadprofileImages'
import profile from'./images/oggy.jpg'
import axios from 'axios'

function Profile() {
  const {loginvar, profileData,streak} = useContext(MyWebContext)
  const [laya,setlaya] = useState('')
  // console.log(streak)
  
    function getimg(){
      console.log('hello0')
      axios.get('http://localhost:8001/aaja')
      .then((res) => { console.log("../../back/"+res.data[0].path,res) 
        setlaya(res.data[0].path)     
      })

    }


  return (
    
    <>
    {/* { */}
      {/* // (loginvar)? */}
    <div id="profile-wrapper">
      <div className="profile-pic-username">
        <div className="picture" style={{ backgroundImage: 'url(' + profile + ')' }} ></div>
        <h1>{'hey...'+profileData}</h1>
        <h4>streak=:</h4>
        <Link to='/payment'>Tasks</Link>
        
      </div>
      <div id="profile-boxes">
          <div className="profile-box">
            <img src={image1} alt="" onClick={getimg} />
          </div>
          <div className="profile-box"><img src={image2} alt="" onClick={getimg} /></div>
          <div className="profile-box"><img src={image3} alt=""onClick={getimg}  /></div>
          <div className="profile-box"><img src={image4} alt=""onClick={getimg}  /></div>
        </div>
         

      <div id="laya">
        {  
        (laya)?
         <img className='laya' src={laya} alt="" />:
         ''
        }
         </div>
        
    </div>
    {/* // :'not found'} */}
    </>
  )
}

export default Profile
