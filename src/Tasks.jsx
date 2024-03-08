import React, { useContext, useEffect, useState } from 'react'
import './Task.css'
import { MyWebContext } from './Main';
function Tasks() {
  const { streak, setstreak } = useContext(MyWebContext)
  const [scratchContent, setscratchContent] = useState('')


  // THIS FUNCTION AUTOMATICAALY SHWOWS THE CONTENT WHICH IS INSIDE THE SCRATCH  ,AFTER A FEW SECONDS
  function automatically_show() {
    let i = 3;
    let interval = setInterval(() => {
      let canvas = document.querySelector("#scratch");
      canvas.style.display = 'none'
      // alert('hello')
      let video = document.createElement('video')
      let source = document.createElement('source')
      let base = document.querySelector('.base')
      // source.src = `https://res.cloudinary.com/adityascloud/image/upload/bullet`

      video.append(source)
      base.append(video)

      if (i === 3)
        clearInterval(interval)
    }, 10000);

  }
  automatically_show()
  //  THIS IS THE FUNCTION WHICH MAINTAINS STREAKS
  function streak_continue(e) {
    e.preventDefault()
    console.log(e.target)
    e.target.disabled = true
    setstreak(true)
    // console.log(streak)  
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

  // THIS FUNCTION RETURN THE RANDOM CATEGORY WHICH WILL BE DISPLAYED IN SCRATCH 
  function select_category() {
    let Categories = ['jhonybhaiya'];
    let select_random_category = Categories[Math.floor(Math.random() * 1)]
    //  console.log(select_random_category)
    return select_random_category;
  }

  // select_category();
  function Call_Content() {
    let random_number = Math.floor(Math.random() * 10)
    setscratchContent(select_category() + random_number)
    console.log(select_category() + random_number)

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
                (scratchContent)?
                <img className='content-image' src={`https://res.cloudinary.com/adityascloud/image/upload/Taskfolder1/${scratchContent}`} alt="" />:''

              }    
                  <button onClick={(e) => { streak_continue(e) }}>run you streak </button>
            </div>
            <canvas id="scratch" width="200" height="200"></canvas>
          </div>
        </div>

      </div>
    </>
  )

}

export default Tasks
