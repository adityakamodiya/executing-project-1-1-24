import axios from 'axios'
import React ,{useState} from 'react'

function HashPassword_login() {
    const [name,setname] = useState('')
    // const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    function Checklogin(){
        axios.post('http://localhost:8081/login',{
            name,password
        })
        .then((res)=>{
            console.log(res.data)
        })
    }
  return (
    <>
    <input type="text" placeholder='name'onChange={(e)=>setname(e.target.value)} />
   {/* <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/> */}
   <input type="password" placeholder='password'  onChange={(e)=>setpassword(e.target.value)}/>
   <button onClick={(e)=>Checklogin(e)}>click </button>

    </>
  )
}

export default HashPassword_login
