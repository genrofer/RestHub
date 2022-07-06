import React, { useState } from 'react';
import { render } from 'react-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from '../../../pages/Login/Login';
import { Container } from "react-bootstrap"


function Hero() {

     const navigate = useNavigate();

     const [input, setInput] = useState("");


     const setStorage = (e) => {
          e.preventDefault()

          localStorage.setItem("email", input);
          if (input == "") {
               document.querySelector(".required").classList.add("block")
          } else {
               navigate("/signup");
          }
     }

     return (
          <>
               <div className="hero-container container">
                    <div className="hero-content">
                         <h1>
                              Unlimited movies, TV <br /> shows, and more.
                         </h1>
                         <h4>
                              Watch anywhere. Cancel anytime.
                         </h4>
                         <br />
                         <p>
                              Ready to watch? Enter your email to create or restart your membership.
                         </p>
                    </div>
                    <div className="hero-form">
                         <form className="d-flex">
                              <input type="email" className='sign-input' placeholder='Email address' name='email' onChange={(e) => setInput(e.target.value)} />
                              <button to="" className='sign-btn' onClick={setStorage}>Get Started</button>
                         </form>
                    </div>
                    <p className='required'>Email required *</p>
               </div>
          </>
     );
}

export default Hero;