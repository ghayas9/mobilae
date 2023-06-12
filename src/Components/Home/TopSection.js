import React from 'react'
import topImg from "../../assets/Img/traplift-header-desktop.jpg"

export default function TopSection() {
  return (
   <div>
        <div className="round-circle" >
            gratis <h4>TRAPLIFT</h4> brochure <br />{">>>>"}
        </div>
        <img src={topImg} alt="topImg" 
                className='img-fluid'
            />
   </div>
  )
}
