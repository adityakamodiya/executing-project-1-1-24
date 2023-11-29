import axios from 'axios'
import React, { useState } from 'react'

function Registered() {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    function Adddata(e){
        e.preventDefault()
        console.log('hello')
        axios.post('http://localhost:8081/registered',{
            name,email,password
        })
        .then((res)=>{

        })
    }
    return (
   <>
   <input type="text" placeholder='name'onChange={(e)=>setname(e.target.value)} />
   <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
   <input type="password" placeholder='password'  onChange={(e)=>setpassword(e.target.value)}/>
   <button onClick={(e)=>Adddata(e)}>click </button>
   </>
  )
}

export default Registered
