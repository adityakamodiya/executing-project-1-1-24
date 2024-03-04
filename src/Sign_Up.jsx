import React, { useState } from 'react'
import './Signup_page.css'
import axios from 'axios'
import avtaar from './images/avtaar.avif'

function Sign_Up() {
   const [gender,setgender] = useState('')
   const [city,setcity]    = useState('')
   const [password,setpassword] = useState('')
   const [username,setusername] = useState('')
   const [confirmPassword,setconfirmPassword] = useState('')
   const [age, setage] = useState('')

   

function UserAddToDataBase(e){
   e.preventDefault()
   if(password ===confirmPassword){
      console.log(username,age,password,city,gender)
      axios.post('http://localhost:8001receive',{
         username,age,password,city,gender
      })
      .then((res)=>{
         alert(res.data)
         // if(res.data != 'not available')
         // console.log(res)
         // else
         // {
         //    alert('this username is no avialable')
         //    let Usrername = document.querySelector('.Usrername')
         //    Usrername.value = ''
         //    Usrername.focus()
            
         // }
      })

   }    
   else{
      let pas = document.querySelector('.password-input')
      let rechecking = document.querySelector('.rechecking-input')
      rechecking.style.display = 'block'
      pas.focus()
   }
}

function hidewarningMain(e){
   
   let pas = document.querySelector('.password-input')
   let rechecking = document.querySelector('.rechecking-input')
   rechecking.style.display = 'none'
   setpassword(e.target.value)
}
function hidewarningConfirm(e){
   let pas = document.querySelector('.password-input')
   let rechecking = document.querySelector('.rechecking-input')
   rechecking.style.display = 'none'
 
   setconfirmPassword(e.target.value)
}


   return (
      <>
         {/* this is sign up page!! */}
         <div id="signup-wrapper" style={{ backgroundImage: 'url(' + avtaar + ')' }}>

            <form action="" onSubmit={UserAddToDataBase}>
               <input  required type="text"  className='Usrername' placeholder='  username'value={username}  onChange={(e)=>{setusername(e.target.value)}}/>
               <input required type="range" min="0" max="100" step="1" value={age} className="input" onChange={(e) => setage(e.target.value)} ></input>
               <div className='age-section'> <h3>Age:</h3><p>{age} </p></div>

               <div id="signup_password">
                  <p className='rechecking-input' style={{display:'none'}}> please check both entries are same!!!</p>
                  <input required className='password-input' type="password" placeholder='password' value={password}  onChange={(e)=>{hidewarningMain(e)}} />
                  <input required className='password-input' type="password" placeholder='confirm password' value={confirmPassword}  onChange={(e)=>{ hidewarningConfirm(e)}} />

               </div>
               <div id="select_city">
                  <label htmlFor=""> <h3>select city :</h3></label>
                  <select required name="" id="city" value={city}  onChange={(e)=>{setcity(e.target.value)}}>
                     <option value='' disabled selected>select city</option>
                     <option value="jaipur">jaipur</option>
                     <option value="alwar">alwar</option>
                     <option value="ajmer">ajmer</option>
                     <option value="udaipur">udaipur</option>
                     <option value="sri ganganagar">sri ganganagar</option>

                  </select>
               </div>

               <div className="gender" onChange={(e)=>{   setgender(e.target.value)}}>
                  <label htmlFor="" name='gender'>Male</label> <input required type="radio" name='gender' value='male' />
                  <label htmlFor="" name='gender'>female</label><input required type="radio" name='gender' value='female' />
               </div>
               <div className="submit-button"><button type='submit'> Submit</button></div>
            </form>
         </div>

      </>
   )
}

export default Sign_Up
