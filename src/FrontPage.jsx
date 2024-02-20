import React from 'react'
import { Link } from 'react-router-dom'
import image from './images/sea.jpg'
import './FrontPage.css'

import { useContext } from 'react'
import {MyWebContext} from './Main'


function FrontPage() {
    const{loginvar} = useContext(MyWebContext)
    // e.preventDefault()

localStorage.setItem('loginvar',loginvar)
let x = localStorage.getItem('loginvar')
    // let view = document.querySelector('#frontpage-wrapper')
    // console.log(view)
    return (
        <>
            <div id='frontpage-wrapper' style={{backgroundImage:'url('+image+')'}}>
                <div className='Top-Header-front'>
                    <h1>Site Logo</h1>
                    <Link to='/signup' >sign up</Link>
                </div>
                <div className='Navbar-section'>
                    <h1>Share the smiles...</h1><br /><br />
                    <div className='nav-icons'>
                    <ul>
                       {/* <li><Link to='/tasks'>Tasks</Link></li> */}
                       <li><Link to='/vision_and_mission'>vision and missions</Link></li>
                       {(loginvar && x )?
                       
                       <li><Link to='/profile'>profile </Link></li>
                       :<li><Link to='/login'>Log in</Link></li>
                    }
                       <li><Link to='/tasks'>icon 4</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrontPage
