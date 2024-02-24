import React, { useContext, useState } from 'react'
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
  // console.log(streak)

  function getimg(e, img) {
    {
      console.log(img)
      setcloudname('adityascloud')
      setid(img)
      setdefaultProfile(`https://res.cloudinary.com/${cloudName}/image/upload/${imagePublicId}`)
      console.log(defaultProfile)
      setImagePath(true)
      // console.log(image1)
      // axios.get('http://localhost:8001/aaja')
      // .then((res) => { 
      //   console.log("../../back/"+res.data[0].path,res) 
      //   setlaya(res.data[0].path)     
      // })
      // axios.post('http://localhost:8001/sendprofile',{

      // })



    };


  }


  return (

    <>
      {/* { */}
      {/* // (loginvar)? */}
      <div id="profile-wrapper">
        <div className="profile-pic-username">
          <div className="picture"  >
            {(defaultProfile == profile) ?
              <img src={defaultProfile} alt="" /> :
              <img src={`https://res.cloudinary.com/${cloudName}/image/upload/${imagePublicId}`}></img>
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


        <div id="laya">
          {
            (imagePath) ?
              <img className='laya' src={`https://res.cloudinary.com/${cloudName}/image/upload/${imagePublicId}`} alt="" /> :
              ''
          }
        </div>

      </div>
      {/* // :'not found'} */}
    </>
  )
}

export default Profile
