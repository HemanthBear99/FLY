import React,{useEffect} from 'react'
import Logo from '../../assets/logo.png'

import {TiSocialFacebook} from 'react-icons/ti'
import {FaPinterestP} from 'react-icons/fa'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import Aos from 'aos';
import'aos/dist/aos.css';

const Footer = () => {

useEffect(()=>{
  Aos.init({
    duration: 2000
  })
},[])

  return (
    <div className='footer'>
        <div  className="sectionContainer container grid">
          <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
            <div className="logoDiv">
              <img src={Logo} className='logo' />
            </div>
            <p>Your mind should be stronger than your feelings, fly!</p>
            <div className="socialIcon flex">
              <TiSocialFacebook className='icon'/>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <FaPinterestP className='icon'/>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
            <span className="linkTitle">
              Information
              <li>
                <a href="">
                  Home
                </a>
              </li>
              <li>
                <a href="">
                  Explore
                </a>
              </li>
              <li>
                <a href="">
                  Flight Status
                </a>
              </li>
              <li>
                <a href="">
                Travel
                </a>
              </li>
              <li>
                <a href="">
                  Check-In
                </a>
              </li>
              <li>
                <a href="">
                  Mannage Ypur Booking
                </a>
              </li>
              
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
            <span className="linkTitle">
              Quick Guide
              <li>
                <a href="">
                  FAQ
                </a>
              </li>
              <li>
                <a href="">
                  How to
                </a>
              </li>
              <li>
                <a href="">
                  Features
                </a>
              </li>
              <li>
                <a href="">
                Baggage
                </a>
              </li>
              <li>
                <a href="">
                  Route Map
                </a>
              </li>
              <li>
                <a href="">
                  Our Communities
                </a>
              </li>
              
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
            <span className="linkTitle">
              Information
              <li>
                <a href="">
                 Chauffuer
                </a>
              </li>
              <li>
                <a href="">
                  Our partners
                </a>
              </li>
              <li>
                <a href="">
                  Destination
                </a>
              </li>
              <li>
                <a href="">
                Careers
                </a>
              </li>
              <li>
                <a href="">
                  Transportation
                </a>
              </li>
              <li>
                <a href="">
                  Programme Rules
                </a>
              </li>
              
            </span>
          </div>





        </div>

        <div className="copyRightDiv flex">
          <p>Courtesy Design | Developed by <a href="https://appalahemanth413@gmail.com" target='_blank'>Hemanth</a></p>
        </div>
    </div>
  )
}

export default Footer