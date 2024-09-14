import React from 'react'
import "./Top_Section.css"
import image from "../assets/hotjar_logo.png";

export default function TopSection() {
  return (
    <div className='main-section'>
      <div className='heading-div'>
        <div>
            <div className='main-line-1'>The World's Most Configurable</div>
            <h1 className='main-line-2'>Travel & Expense Management Software</h1>
        </div>
        <p className='main-line-3'>Configure any rule. Enable a world class mobile experience for your users. Get seamless reporting & integrations. Inbuilt OCR expense scanning. Manage travel & non-travel expenses. Open APIs to connect with external systems.</p>
      </div>
      <div className='info-div'>
        <div className='user-div'>
            <div className='box1'>Name</div>
            <div className='box2'>Office email-id</div>
            <div className='button2'>Start trail</div>
        </div>
        <div className='free-trail'> 30 Days free trial <div className='circle'></div> Upto 10 users</div>
      </div>
      <div className='hotjar-container'>
        <div className='hotjar-text'>USED BY OVER 50 ENTERPRISES</div>
        <div className='hotjar-img-div'>
          <img src={image} alt="hotjar"></img>
          <img src={image} alt="hotjar"></img>
          <img src={image} alt="hotjar"></img>
          <img src={image} alt="hotjar"></img>
          <img src={image} alt="hotjar"></img>
          <img src={image} alt="hotjar"></img>
        </div>
      </div>
    </div>
  )
}
