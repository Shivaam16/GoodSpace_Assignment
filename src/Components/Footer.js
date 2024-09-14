import React from 'react'
import logo from '../assets/Expense.png'
import location from '../assets/location.png'
import call from '../assets/phone.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'
import "./Footer.css"

export default function Footer(){
  return (
    <div className='footer-main'>
        <div className='footer-box'>
            <div className='footer-logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='footer-box2'>
                <div className='box3'>
                  <img src={location} alt='location'/>
                  <p>Address</p>
                </div>
                <div className='box3'>
                  <img src={call}alt='phone'/>
                  <p>+91 1234567890</p>
                </div>
                <div className='box3 social-media-box'>
                  <p>Social Media</p>
                  <img src={linkedin} alt='linkedin'/>
                  <img src={youtube} alt='youtube'/>
                  <img src={instagram} alt='instagram'/>
                </div>
            </div>
        </div>

        <hr className='division-line'></hr>

        <div className='copyright'>
            <div className='footer-content'>
              <div className='footer-items'>Blogs</div>
              <div className='footer-items'>Features</div>
              <div className='footer-items'>Pricing</div>
              <div className='footer-items'>Integrations</div>
            </div>
            <div className='copyright2'>
                <p>Copyright © 2024 • ExpenseBook</p>
            </div>     
        </div>     
    </div>
  )
}