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
  const { loginvar, profileData,setprofileData, streak, setstreak } = useContext(MyWebContext)
  const [imagePath, setImagePath] = useState(false)
  const [cloudName, setcloudname] = useState('')
  const [imagePublicId, setid] = useState('')
  const [defaultProfile, setdefaultProfile] = useState(profile)
  const [clickimg, setclickimg] = useState('')
  const [defaultstreak, setdefaultstreak] = useState(true)
  // const[temp,settemp] = useState('')

  const [pp, setpp] = useState(true)

  useEffect(()=>{
   
  },[])
// const isLoggedIn = sessionStorage.getItem('isLoggedIn')
  // THIS FUNCTION GET   THE ALL  USERNAMES STREAK 
  function Call_streak() {
    
    let task = document.querySelector('.task')
    // task.style.display = 'none' 
    task.style.transform = 'rotate(360deg)'
    task.style.top = '85%'
    task.style.left = '45%'
    let streaks = document.querySelector('.streak')
    streaks.style.transform = 'rotate(360deg)'
    streaks.style.left = '46.5%'
    
    

    axios.get('http://localhost:8001/callstreak')
      .then((res) => {

        console.log(res.data)
        if (res.data!=0 &&  localStorage.getItem('username')) {
          res.data.forEach(element => {
            if (localStorage.getItem('username') == element.profileData) {
              setstreak(element.incrstreak);
              // console.log(element.incrstreak,streak)
              // console.log(element.folderarray,element.categoryarray)
              setdefaultstreak(false)
           }
            
          });

        
        }
        else {
          console.log('ni aaya')
          setstreak(0);
        }
        
        
      })
  }
  useEffect(() => {
    
    Call_streak()
  }, [])

  
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/')
    }
    else{
      // console.log(localStorage.getItem('username'))
     let name =  localStorage.getItem('username')
     setprofileData(name)

     axios.get('http://localhost:8001/WholeProfiles')
     .then((res) => {
       console.log(res.data)
       if (localStorage.getItem('username')) {
         res.data.forEach(element => {
           if (localStorage.getItem('username') == element.profileData) {
             console.log(profileData, element.clickimg)
             setid(element.clickimg)
             setcloudname('adityascloud')
             setpp(false)
             // console.log(imagePublicId)
           }

         });
       }
     })
    }



  }, [])





  // iss func ko uncomment v krnaa h 

  function direct_login_alert() {
    if (!profileData) {
      let profile_wrapper = document.querySelector('#profile-wrapper')
      profile_wrapper.style.display = 'none'
      alert('you are redirected to log in')
      navigate('/')


    }
  }
  // useEffect(() => {
  //   direct_login_alert()
  // }, [])



  function getimg(e, img) {
    console.log(streak)
    let profile_alert = document.querySelector('#profile-change-alert')
    profile_alert.style.display = 'block'

    {

      setclickimg(img)
      console.log(clickimg)
      setcloudname('adityascloud')
      setid(img)
      setdefaultProfile(`https://res.cloudinary.com/${cloudName}/image/upload/profiles/${imagePublicId}`)
      // console.log(defaultProfile)
      setImagePath(true)

    };


  }


  function changeProfile(e, y) {
    console.log(profileData)
    console.log(clickimg)

    let profile_alert = document.querySelector('#profile-change-alert')
    if(y=='yes'){
    profile_alert.style.display = 'none'
    alert("profile is changed")
    axios.post("http://localhost:8001/Myprofile", {
      profileData, clickimg
    })
      .then((response) => {
        console.log(response);
      });

    }
  else {
    profile_alert.style.display = 'none'
  }
  }

  const FIRST = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 500,
    rtl: true
  };
  const SECOND = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 500,

    rtl: false
  };
  const THIRD = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 500,
    rtl: true
  };

  return (

    <>
      <div id="profile-wrapper">
        <div id="profile-change-alert" style={{ 'display': 'none' }} >
          <p>do you want to change your profile</p>
          <button onClick={(e) => changeProfile(e, 'yes')}>yes</button>
          <button onClick={(e) => changeProfile(e, 'No')}>No</button>
        </div>

        <div className="profile-pic-username">
          <div className="picture"  >
            {(defaultProfile == profile && pp) ?
              <img src={defaultProfile} alt="" /> :
              <img className='laya' src={`https://res.cloudinary.com/${cloudName}/image/upload/profiles/${imagePublicId}`} alt="" />
            }</div>
          <h1 className='username'>{'hey...' + profileData}</h1>
          {
            (defaultstreak) ?
            <h4 className='streak'><span>streak</span>=:0</h4>:
            <h4 className='streak'><span>streak</span>=:{streak}</h4>
          }
          <Link className='task' to='/tasks'>Tasks</Link>
          <button onClick={()=>{
            localStorage.removeItem('token')
            localStorage.removeItem('username')
          }}>log out</button>

        </div>

        <div className="slider-container">
          <Slider {...FIRST}>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile1`} alt="" onClick={(e) => { getimg(e, 'profile1') }} />              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile2`} alt="" onClick={(e) => { getimg(e, 'profile2') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile3`} alt="" onClick={(e) => { getimg(e, 'profile3') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile4`} alt="" onClick={(e) => { getimg(e, 'profile4') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile5`} alt="" onClick={(e) => { getimg(e, 'profile5') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile6`} alt="" onClick={(e) => { getimg(e, 'profile6') }} /> 
              </div>
            </div>

          </Slider>
          <Slider {...SECOND}>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile7`} alt="" onClick={(e) => { getimg(e, 'profile7') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile8`} alt="" onClick={(e) => { getimg(e, 'profile8') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile9`} alt="" onClick={(e) => { getimg(e, 'profile9') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile10`} alt="" onClick={(e) => { getimg(e, 'profile10') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile11`} alt="" onClick={(e) => { getimg(e, 'profile11') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile12`} alt="" onClick={(e) => { getimg(e, 'profile12') }} /> 
              </div>
            </div>

          </Slider>
          <Slider {...THIRD}>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile13`} alt="" onClick={(e) => { getimg(e, 'profile13') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile14`} alt="" onClick={(e) => { getimg(e, 'profile14') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile15`} alt="" onClick={(e) => { getimg(e, 'profile15') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile16`} alt="" onClick={(e) => { getimg(e, 'profile16') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile17`} alt="" onClick={(e) => { getimg(e, 'profile17') }} /> 
              </div>
            </div>
            <div className="slider-div">
              <div className="image-div">
              <img src={`https://res.cloudinary.com/adityascloud/image/upload/profiles/profile18`} alt="" onClick={(e) => { getimg(e, 'profile18') }} /> 
              </div>
            </div>
          </Slider>
        </div>
      </div>




    </>
  )

}
export default Profile
