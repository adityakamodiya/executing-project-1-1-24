import React, { useContext, useEffect, useState } from 'react'
import './Task.css'
import { MyWebContext } from './Main';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Tasks() {
  let navigate = useNavigate()
  const { profileData,streak, setstreak } = useContext(MyWebContext)
  const [scratchContent, setscratchContent] = useState('')
  const [categories, setcategories] = useState('')
  const [folder, setfolder] = useState('')
  const [random, setrandom] = useState('')

  // console.log(streak)

  function direct_TASK_alert() {
    if (!profileData) {
      let task_wrapper = document.querySelector('#wrapper')
      task_wrapper.style.display = 'none'
      alert('you are redirected to log in')
      navigate('/')


    }
  }
  useEffect(() => {
    direct_TASK_alert()
  }, [])

  // THIS FUNCTION AUTOMATICAALY SHWOWS THE CONTENT WHICH IS INSIDE THE SCRATCH  ,AFTER A FEW SECONDS
  function automatically_show() {
    let i = 1;

    let interval = setInterval(() => {
      let canvas = document.querySelector("#scratch");
      canvas.style.display = 'none'


      if (i === 1) {
        let content = document.querySelector('.base')
        let streak_button = document.querySelector('.streak-button')
        content.style.width = '130%'
        content.style.height = '110%'
        content.style.borderRadius = '20px 20px 20px 20px'
        streak_button.style.left = '35%'
        streak_button.style.transform = 'rotate(360deg)'
        clearInterval(interval)
      }
    }, 2000);

  }
  automatically_show()
  //  THIS IS THE FUNCTION WHICH MAINTAINS STREAKS OF USER
  function streak_continue(e) {
    e.preventDefault()
    // setstreak(streak+1);
    // console.log(e.target)
    axios.post('http://localhost:8001/increasetreak',{
  profileData,streak
})
.then((res)=>{
  console.log(res)
})
e.target.disabled = true

      // console.log(profileData,streak)  /

  }


  // THIS IS SCRATCH CARD FUNCTION WHICH IS SHOWING SCRATCH
  function ScrathcCard() {

    let canvas = document.getElementById("scratch");
    let context = canvas.getContext("2d");
    const init = () => {
      let gradientColor = context.createLinearGradient(0, 0, 135, 135);
      gradientColor.addColorStop(0, "#c3a3f1");
      gradientColor.addColorStop(1, "#6414e9");
      context.fillStyle = gradientColor;
      context.fillRect(0, 0, 200, 200);
    };
    //initially mouse X and mouse Y positions are 0
    let mouseX = 0;
    let mouseY = 0;
    let isDragged = false;
    //Events for touch and mouse
    let events = {
      mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
      },
      touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
      },
    };
    let deviceType = "";
    //Detech touch device
    const isTouchDevice = () => {
      try {
        //We try to create TouchEvent. It would fail for desktops and throw error.
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
      } catch (e) {
        deviceType = "mouse";
        return false;
      }
    };
    //Get left and top of canvas
    let rectLeft = canvas.getBoundingClientRect().left;
    let rectTop = canvas.getBoundingClientRect().top;
    //Exact x and y position of mouse/touch
    const getXY = (e) => {
      mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
      mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
    };
    isTouchDevice();
    //Start Scratch
    canvas.addEventListener(events[deviceType].down, (event) => {
      isDragged = true;
      //Get x and y position
      getXY(event);
      scratch(mouseX, mouseY);
    });
    //mousemove/touchmove
    canvas.addEventListener(events[deviceType].move, (event) => {
      if (!isTouchDevice()) {
        event.preventDefault();
      }
      if (isDragged) {
        getXY(event);
        scratch(mouseX, mouseY);
      }
    });
    //stop drawing
    canvas.addEventListener(events[deviceType].up, () => {
      isDragged = false;
    });
    //If mouse leaves the square
    canvas.addEventListener("mouseleave", () => {
      isDragged = false;
    });
    const scratch = (x, y) => {
      //destination-out draws new shapes behind the existing canvas content
      context.globalCompositeOperation = "destination-out";
      context.beginPath();
      //arc makes circle - x,y,radius,start angle,end angle
      context.arc(x, y, 12, 0, 2 * Math.PI);
      context.fill();
    };
    window.onload = init();

    // console.log('streak')
  }
  useEffect(() => {

    ScrathcCard()
  }, [])

  // THIS IS THE FUNCTION WHICH GENERATE A RANDOM NUMBER    AND THE INTERVAL WILL BE UPDATED WHENVER WE INCREASE NUMBER OF FOLDERS;






  // THIS FUNCTION WILL SELECT FOLDERS
  function select_folder(select_random) {
    let folders = ['Taskfolder1', 'jethalal', 'tomAndjerry'];
    // console.log(folders[random]);
    return folders[select_random];
    // console.log(select_random)

  }


  // THIS FUNCTION RETURN THE RANDOM CATEGORY WHICH WILL BE DISPLAYED IN SCRATCH 
  function select_category(select_random) {

    let Categories = ['jhonybhaiya', 'nobita', 'tomAndjerry'];


    return Categories[select_random];



  }



  function Call_Content() {
    let select_random = Math.floor(Math.random() * 3)

    let random_number = Math.floor(Math.random() * 5)

    setfolder(select_folder(select_random))
    setcategories(select_category(select_random) + random_number)

  }

  useEffect(() => {

    Call_Content();

  }, [])


  return (
    <>
      <div id="wrapper">
        <div id="background">
          <div className="box-positions">
            <div className="box   box1"></div>
            <div className="box circle circle1"></div>
            <div className="box box2"></div>
            <div className="box box3"></div>
            <div className="box circle circle2"></div>
            <div className="box circle circle3"></div>
            <div className="box box4"></div>
            <div className="box circle circle4"></div>
          </div>
        </div>
        <div id="scratch-box">
          <div class="container">
            <div class="base">
              {
                (categories && folder) ?
                  <img className='content-image' src={`https://res.cloudinary.com/adityascloud/image/upload/${folder}/${categories}`} alt="" /> : ''

              }
              <button className='streak-button' onClick={(e) => { streak_continue(e) }}>run you streak </button>
            </div>
            <canvas id="scratch" width="200" height="200"></canvas>
          </div>
        </div>

      </div>
    </>
  )

}

export default Tasks


// git status
// git add -A
// git config --global user.email "adityakamodiya@gmail.com"
// git config --global user.name "Aditya Kamodiya"
// git commit  -m"..."
// git push -u origin main