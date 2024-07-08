import React from 'react'
import './Programs.css'
import court_1 from "../../assets/court_1.jpg"
import court_2 from "../../assets/court_2.jpg"
import court_3 from "../../assets/court_3.jpg"
import court_icon from "../../assets/court_icon.png"

const Programs = () => {
  return (
    <div className='programs'>
     <div className="program">
        <img src={court_1} alt="" />
        <div className="caption">
            <img src={court_icon} alt="" />
            <p>Interior Court</p>
            </div> 
        </div> 
        <div className="program">
        <img src={court_2} alt="" />
        <div className="caption">
            <img src={court_icon} alt="" />
            <p>Exterior Court</p>
        </div>
        </div> 
        <div className="program">
        <img src={court_3} alt="" />
        <div className="caption">
            <img src={court_icon} alt="" />
            <p>Other</p>
        </div>
        </div> 
    </div>
  )
}

export default Programs