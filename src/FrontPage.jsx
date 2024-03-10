import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image from './images/sea.jpg'
import './FrontPage.css'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { useContext } from 'react'
import {MyWebContext} from './Main'


function FrontPage() {
    const{loginvar} = useContext(MyWebContext)
    const[counter,setcounter]= useState(0)
    const[varr,setvarr]= useState(true)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    
    // e.preventDefault()

localStorage.setItem('loginvar',loginvar)
let x = localStorage.getItem('loginvar')
    

    function slider_section(){
        // setcounter(0);
        // alert("ello")
        let sliders = document.querySelectorAll('.sliders')
            // var counter=0;
            sliders.forEach((slide,index)=>{
                slide.style.left = `${index*100}%`
            })

            
            
    }
    useEffect(()=>{
        slider_section();
    })

    function next_slide(){
        

        setcounter(counter+1)
        // let counter =0
        // console.log(counter)
        slideimage();
    }
    function previous_slide(){
        setcounter(counter-1)
        slideimage()
        
    }

function slideimage(){
    console.log(counter)
    let sliders = document.querySelectorAll('.sliders')
    sliders.forEach((slide,index)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
        
    })
}

 
 


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
                       {/* <li><Link to='/vision_and_mission'>vision and missions</Link></li> */}
                       {(loginvar && x )?
                       
                       <li><Link to='/profile'>profile </Link></li>
                       :<li><Link to='/login'>Log in</Link></li>
                    }
                       <li><Link to='/tasks'>icon 4</Link></li>
                    </ul>
                    </div>
                </div>

            </div>
            <div id="slider-frame">
            <Slider {...settings}>
      <div className='box'>
        <h3>1</h3>
      </div>
      <div className='box'>
        <h3>2</h3>
      </div>
      <div className='box'>
        <h3>3</h3>
      </div>
      <div className='box'>
        <h3>4</h3>
      </div>
      <div className='box'>
        <h3>5</h3>
      </div>
      <div className='box'>
        <h3>6</h3>
      </div>
      <button>left</button>
      <button>right</button>
    </Slider>

            </div>
        </>
    )
}

export default FrontPage
