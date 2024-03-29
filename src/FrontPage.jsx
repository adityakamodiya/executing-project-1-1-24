import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image from './images/sea.jpg'
import './FrontPage.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import last from './images/lastsec.webp'

import { useContext } from 'react'
import { MyWebContext } from './Main'


function FrontPage() {
    const { loginvar } = useContext(MyWebContext)
    const [counter, setcounter] = useState(0)
    const [varr, setvarr] = useState(true)


    // e.preventDefault()

    localStorage.setItem('loginvar', loginvar)
    let x = localStorage.getItem('loginvar')






    const settings = {
        //   dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        arrows: false,
        autoplay: true,
    };


    return (
        <>
            <div id='frontpage-wrapper' style={{ backgroundImage: 'url(' + image + ')' }}>
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
                            {(loginvar && x) ?

                                <li><Link to='/profile'>profile </Link></li>
                                : <li><Link to='/login'>Log in</Link></li>
                            }
                            <li><Link to='/tasks'>icon 4</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div id="slide-wrapper">
                <div className="our-heading">
                    <h1>We are what
                        we are today <br /> because of our strong community</h1>
                </div>
                <div className="slider-container" style={{ "height": "100%" }}>
                    <Slider {...settings}>
                        <div className="slide-box">
                            <div className="review-content">
                                <div className="img-div">
                                    <img src="https://res.cloudinary.com/adityascloud/image/upload/img1" alt="" />
                                </div>
                                <div className="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero tempore laboriosam nobis culpa at nisi, molestias vitae neque ipsum debitis illo, consequuntur velit nulla sit! Illo laudantium quasi
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatibus?repellat.</p>
                                <h1>Aditya</h1>

                            </div>
                        </div>
                        <div className="slide-box">
                            <div className="review-content">
                                <div className="img-div">
                                    <img src="https://res.cloudinary.com/adityascloud/image/upload/img1" alt="" />
                                </div>
                                <div className="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero tempore laboriosam nobis culpa at nisi, molestias vitae neque ipsum debitis illo, consequuntur velit nulla sit! Illo laudantium quasi
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatibus?repellat.</p>
                                <h1>Aditya</h1>
                            </div>
                        </div>
                        <div className="slide-box">
                            <div className="review-content">
                                <div className="img-div">
                                    <img src="https://res.cloudinary.com/adityascloud/image/upload/img1" alt="" />
                                </div>
                                <div className="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero tempore laboriosam nobis culpa at nisi, molestias vitae neque ipsum debitis illo, consequuntur velit nulla sit! Illo laudantium quasi
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatibus?repellat.</p>
                                <h1>Ritika</h1>
                            </div>
                        </div>
                        <div className="slide-box">
                            <div className="review-content">
                                <div className="img-div">
                                    <img src="https://res.cloudinary.com/adityascloud/image/upload/img1" alt="" />
                                </div>
                                <div className="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero tempore laboriosam nobis culpa at nisi, molestias vitae neque ipsum debitis illo, consequuntur velit nulla sit! Illo laudantium quasi
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatibus?repellat.</p>
                                <h1>Nitesh</h1>
                            </div>
                        </div>
                        <div className="slide-box">
                            <div className="review-content">
                                <div className="img-div">
                                    <img src="https://res.cloudinary.com/adityascloud/image/upload/img1" alt="" />
                                </div>
                                <div className="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero tempore laboriosam nobis culpa at nisi, molestias vitae neque ipsum debitis illo, consequuntur velit nulla sit! Illo laudantium quasi
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatibus?repellat.</p>
                                <h1>Mankabiir</h1>
                            </div>
                        </div>
                        <div className="slide-box">
                            <div className="review-content">
                                <div className="img-div">
                                    <img src="https://res.cloudinary.com/adityascloud/image/upload/img1" alt="" />
                                </div>
                                <div className="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero tempore laboriosam nobis culpa at nisi, molestias vitae neque ipsum debitis illo, consequuntur velit nulla sit! Illo laudantium quasi
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatibus?repellat.</p>
                                <h1>Utkansha</h1>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
            <div id="our-social-platforms" style={{backgroundImage: 'url(' + last + ')'}}>
                <div className="first-heading"><p>you look nice when you smile (now that you're smiling, how about trying out this site?)</p></div>
                <div className="second-head"><h3>come be a part of our <br />duniya</h3></div>
                <div className="main-title"><h1>our  main title</h1></div>
                <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                
                
                </div>
                <div className="other-sections">
                    <div className="section">
                    <a href="/">home</a>
                    <a href="">contact</a>
                    <a href="">terms and conditions</a>
                </div></div>
                <div className="copyright">
                    
                <p>copyright@2024.ALL Rights Reserved By <span>Aditya's Site PVT. LTD. |</span> CIN:0012003004</p>
                </div>
            </div>

        </>
    )
}

export default FrontPage
