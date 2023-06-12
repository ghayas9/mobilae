import React from 'react'
import topImg from "../../assets/Img/traplift-header-desktop.jpg"
import {FaGreaterThan} from "react-icons/fa"
export default function TopSection() {
  return (
   <div style={{position:"relative"}}>
        <div className="round-circle" >
        
            gratis <h4>TRAPLIFT</h4> brochure <br />
            <FaGreaterThan/>
            <FaGreaterThan/>
            <FaGreaterThan/>
            <FaGreaterThan/>
        </div>
        <img src={topImg} alt="topImg" 
                className='img-fluid'
            />
   </div>
  )
}
