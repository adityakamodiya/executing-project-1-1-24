import React, { useContext, useEffect, useState } from 'react'
import { MyWebContext } from './Main'
import { Link } from 'react-router-dom'
import './Profile.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import im from '../../back/UploadprofileImages'
import profile from './images/oggy.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate()
  const { loginvar, profileData, streak, setstreak } = useContext(MyWebContext)
  const [imagePath, setImagePath] = useState(false)
  const [cloudName, setcloudname] = useState('')
  const [imagePublicId, setid] = useState('')
  const [defaultProfile, setdefaultProfile] = useState(profile)
  const [clickimg, setclickimg] = useState('')
  const [defaultstreak, setdefaultstreak] = useState(true)

  const [pp, setpp] = useState(true)

  // THIS FUNCTION GET   THE ALL  USERNAMES STREAK 
  function Call_streak() {
    axios.get('http://localhost:8001/callstreak')
      .then((res) => {

        console.log(res)
        if (profileData) {
          res.data.forEach(element => {
            if (profileData == element.profileData) {
              setstreak(element.incrstreak)
              setdefaultstreak(false)
            }
          });

        }
      })
  }
  useEffect(() => {
    Call_streak()
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8001/WholeProfiles')
      .then((res) => {
        // console.log(res.data)
        if (profileData) {
          res.data.forEach(element => {
            if (profileData == element.profileData) {
              // console.log(profileData, element.clickimg)
              setid(element.clickimg)
              setcloudname('adityascloud')
              setpp(false)
              console.log(imagePublicId)
            }

          });
        }
      })

  }, [])





// iss func ko uncomment v krnaa h 

  function direct_login_alert() {
    // if (!profileData) {
    //   let profile_wrapper = document.querySelector('#profile-wrapper')
    //   profile_wrapper.style.display = 'none'
    //   alert('you are redirected to log in')
    //   navigate('/')


    // }
  }
  useEffect(() => {
    direct_login_alert()
  }, [])



  function getimg(e, img) {
    let profile_alert = document.querySelector('#profile-change-alert')
    profile_alert.style.display = 'block'

    {

      setclickimg(img)
      // console.log(clickimg)
      setcloudname('adityascloud')
      setid(img)
      setdefaultProfile(`https://res.cloudinary.com/${cloudName}/image/upload/${imagePublicId}`)
      // console.log(defaultProfile)
      setImagePath(true)





    };


  }


  function changeProfile(e, y) {
    console.log(profileData)
    console.log(clickimg)

    let profile_alert = document.querySelector('#profile-change-alert')
    profile_alert.style.display = 'none'
    alert("profile is changed")
    axios.post("http://localhost:8001/Myprofile", {
      profileData, clickimg
    })
      .then((response) => {
        console.log(response);
      });
  }
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:500,
    
    rtl:true
  };

  return (

    <>
      <div id="profile-wrapper">
        <div id="profile-change-alert" style={{ 'display': 'none' }} >
          <p>do you want to change your profile</p>
          <button onClick={(e) => changeProfile(e, 'yes')}>yes</button>
          <button>no</button>
        </div>

        <div className="profile-pic-username">
          <div className="picture"  >
            {(defaultProfile == profile && pp) ?
              <img src={defaultProfile} alt="" /> :
              <img className='laya' src={`https://res.cloudinary.com/${cloudName}/image/upload/${imagePublicId}`} alt="" />
            }</div>
          <h1>{'hey...' + profileData}</h1>
          {
            (defaultstreak) ?
              <h4>streak=:0</h4> :
              <h4>streak=:{streak}</h4>
          }
          <Link to='/tasks'>Tasks</Link>

        </div>
        <div id="profile-boxes">

          <div className="profile-box"><img src={`https://res.cloudinary.com/adityascloud/image/upload/img1`} alt="" onClick={(e) => { getimg(e, 'img1') }} /></div>
          <div className="profile-box"><img src={`https://res.cloudinary.com/adityascloud/image/upload/img2`} alt="" onClick={(e) => { getimg(e, 'img2') }} /></div>
          <div className="profile-box"><img src={`https://res.cloudinary.com/adityascloud/image/upload/img3`} alt="" onClick={(e) => { getimg(e, 'img3') }} /></div>
          <div className="profile-box"><img src={`https://res.cloudinary.com/adityascloud/image/upload/img4`} alt="" onClick={(e) => { getimg(e, 'img4') }} /></div>
          <div className="profile-box"><img src={`https://res.cloudinary.com/adityascloud/image/upload/img5`} alt="" onClick={(e) => { getimg(e, 'img5') }} /></div>
        </div>



      </div>

      <div className="slider-container">
      <Slider {...settings}>
        <div className='ad' >
          <h3>1</h3>
        </div>
        <div className='ad' >
          <h3>2</h3>
        </div>
        <div className='ad' >
          <h3>3</h3>
        </div>
        <div className='ad' >
          <h3>4</h3>
        </div>
        <div className='ad' >
          <h3>5</h3>
        </div>
        <div className='ad' >
          <h3>6</h3>
        </div>
      </Slider>
    </div>

    </>
  )

}
export default Profile
