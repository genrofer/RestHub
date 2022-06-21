import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../../assets/images/logo.png'

import "./Footer.scss"

const Footer = () => {
     return (
          <div className='footer'>
               <li className='d-flex logo-item'>
                    <img src={Logo} alt="logo" width={200} height={75} />
               </li>
               <ul className="d-flex footer-ul">
                    <li className='footer-first'>
                         <ul className="d-flex">
                              <a href="https://genrofer.ga" className='footer-question' target="_blank">Terms Of Use</a>
                              <a href="https://genrofer.ga" className='footer-question' target="_blank">Privacy-Policy</a>
                              <a href="https://genrofer.ga" className='footer-question' target="_blank">FAQ</a>
                              <a href="https://genrofer.ga" className='footer-question' target="_blank">Watch List</a>
                         </ul>
                         <p>
                              © 2022 RESTHUB. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
                         </p>
                    </li>
                    <li className='social-icons'>
                         <p>Follow us:</p>
                         <div className="d-flex">
                              <i className="fab fa-facebook-f facebook"></i>
                              <i className="fab fa-google google"></i>
                              <i className="fab fa-twitter twitter"></i>
                              <i className="fab fa-instagram instagram"></i>
                         </div>
                    </li>

               </ul>
          </div>
     )
}

export default Footer