import React, { useContext, useEffect, useState } from 'react'
import { MyWebContext } from './Main'
import { Link } from 'react-router-dom'
import './Profile.css'
import image1 from './profileImages/img1.jpg'
import image2 from './profileImages/img2.jpg'
import image3 from './profileImages/img3.jpg'
import image4 from './profileImages/img4.jpg'
import image5 from './profileImages/img5.jpg'
// import im from '../../back/UploadprofileImages'
import profile from './images/oggy.jpg'
import axios from 'axios'

function Profile() {
  const { loginvar, profileData, streak } = useContext(MyWebContext)
  const [imagePath, setImagePath] = useState(false)
  const [cloudName, setcloudname] = useState('')
  const [imagePublicId, setid] = useState('')
  const [defaultProfile, setdefaultProfile] = useState(profile)
  const[clickimg,setclickimg] = useState('')
  const[pp,setpp] = useState(true)
  // console.log(streak)

  useEffect(()=>{
    axios.get('https://project-1-1-24-backend1.onrender.com/WholeProfiles')
    .then((res)=>{
      console.log(res.data)
      if(profileData)
      {
        res.data.forEach(element => {
          if(profileData == element.profileData){
            console.log(profileData,element.clickimg)
            setid(element.clickimg) 
            setcloudname('adityascloud')
            setpp(false)
            console.log(imagePublicId)
        }

        });
      }
    })
  },[])



  function getimg(e, img) {
     let profile_alert = document.querySelector('#profile-change-alert')
     profile_alert.style.display = 'block' 

    {
      // var clickimg = img
      setclickimg(img)
      // console.log(clickimg)
      setcloudname('adityascloud')
      setid(img)
      setdefaultProfile(`https://res.cloudinary.com/${cloudName}/image/upload/${imagePublicId}`)
      // console.log(defaultProfile)
      setImagePath(true)
      // console.log(image1)
      



    };


  }


  function changeProfile(e,y){
    console.log(profileData)
    console.log(clickimg)

    let profile_alert = document.querySelector('#profile-change-alert')
    profile_alert.style.display = 'none'
    alert("profile is changed")    
    axios.post("https://project-1-1-24-backend1.onrender.com/Myprofile", {
      profileData,clickimg
    })
    .then((response) => {
      console.log(response);
    });
  }

  return (

    <>
      


      <div id="profile-wrapper">
        <div id="profile-change-alert" style={{'display':'none'}} >
          <p>do you want to change your profile</p>
          <button onClick={(e)=>changeProfile(e,'yes')}>yes</button>
          <button>no</button>
        </div>

        <div className="profile-pic-username">
          <div className="picture"  >
            {(defaultProfile == profile && pp ) ?
              <img src={defaultProfile} alt="" /> :
              <img className='laya' src={`https://res.cloudinary.com/${cloudName}/image/upload/${imagePublicId}`} alt="" /> 
            }</div>
          <h1>{'hey...' + profileData}</h1>
          <h4>streak=:</h4>
          <Link to='/payment'>Tasks</Link>

        </div>
        <div id="profile-boxes">
          <div className="profile-box">
            <img src={image1} alt="" onClick={(e) => { getimg(e, 'img1') }} />
          </div>
          <div className="profile-box"><img src={image2} alt="" onClick={(e) => { getimg(e, 'img2') }} /></div>
          <div className="profile-box"><img src={image3} alt="" onClick={(e) => { getimg(e, 'img3') }} /></div>
          <div className="profile-box"><img src={image4} alt="" onClick={(e) => { getimg(e, 'img4') }} /></div>
        </div>



      </div>

    </>
  )
}

export default Profile
