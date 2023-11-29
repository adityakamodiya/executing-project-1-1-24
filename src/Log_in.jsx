import React,{useState} from 'react'
import { useContext } from 'react'
import {MyWebContext} from './Main'
import avtaar from './images/avtaar.avif'
import { Link } from 'react-router-dom'
import './Log_In.css'

import './Signup_page.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Log_in() {
  const {setloginvar,setprofileData} = useContext(MyWebContext)
  const [password,setpassword] = useState('')
  const [username,setusername] = useState('')
let navigate = useNavigate()
                                  
axios.defaults.withCredentials = true        
function log_in_user(e,name) {    
  // console.log(d)           
    e.preventDefault()
    // console.log("hello")
    axios.post('https://project-1-1-24-backend1.onrender.com/login',{
      username,password
    })
    .then((res)=>{
      console.log(res)
      if(res.data == 'login successfull'){
        setprofileData(username)
        setloginvar(true)
      navigate('/profile')
    }
    else 
     alert(res.data + ' please check username or your password')
    })
  }
  return (
    <>
      {/* <h1>this is log in page</h1> */}
      <div id="Log_In" style={{ backgroundImage: 'url(' + avtaar + ')' }}>
        <form action="" onSubmit={(e)=>log_in_user(e,username)} >
          <input type="text" required onChange={(e)=>setusername(e.target.value)}  placeholder='   username' />
          <input type="password" required onChange={(e)=>setpassword(e.target.value)} placeholder='   password' />
          <div className="submit-button">
            <button type='submit'> log in </button>
          </div>
          <p>if you did not sign up yet ,please  <Link to='/signup'>sign up</Link></p>
        </form>
      </div>
    </>
  )
}

export default Log_in
