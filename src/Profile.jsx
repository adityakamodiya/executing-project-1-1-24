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
  const [imagePath,setImagePath] = useState(false)
  const[cloudName,setcloudname] = useState('')
  const[imagePublicId,setid]=useState('')
  // console.log(streak)
  
    function getimg(){{
setcloudname('adityascloud')
setid('rajasthan')
setImagePath(true)
      // console.log(image1)
      // axios.get('http://localhost:8001/aaja')
      // .then((res) => { 
      //   console.log("../../back/"+res.data[0].path,res) 
      //   setlaya(res.data[0].path)     
      // })
      

      
        try {
          // Replace 'your_cloud_name' with your Cloudinary cloud name
          const cloudName = 'adityascloud';
  
          // Replace 'your_image_public_id' with the public ID of your image on Cloudinary
          const imagePublicId = 'rajasthan';
  
          // Cloudinary API URL to get the image path
          axios.get(`https://res.cloudinary.com/${cloudName}/image/upload/${imagePublicId}`)
            .then((response)=>{
             console.log(response)
              // setImagePath(response.data.url);
            })
          // Make a GET request using Axios
        
  
          // Set the image path in the state
        } catch (error) {
          console.error('Error fetching image path:', error);
        }
      };
    

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
        (imagePath)?
         <img className='laya' src={`https://res.cloudinary.com/${cloudName}/image/upload/${imagePublicId}`}alt="" />:
         ''
        }
         </div>
        
    </div>
    {/* // :'not found'} */}
    </>
  )
}

export default Profile
