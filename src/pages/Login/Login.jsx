import "./Login.scss"
import Logo from '../../assets/images/logo.png'
import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const Login = () => {
     const navigate = useNavigate()

     const email = localStorage.getItem("email")

     const [input, setInput] = useState("")
     const [password, setPassword] = useState("")

     useEffect(() => {
          if (email) {
               document.querySelector(".sign-input").value = email
          } else {
               document.querySelector(".sign-input").value = ""
          }
     }, [])

     const setLocal = (e) => {
          e.preventDefault()

          if (password == "") {
               alert("Please fill all fields")
          } else {
               if (input == "") {
                    localStorage.setItem("username", email);
               } else {
                    localStorage.setItem("username", input);
               }
               localStorage.removeItem("email");
               navigate("/movies");
          }

     }
     return (
          <div className="login-hero">
               <div className="logo">
                    <img src={Logo} alt="logo" />
               </div>

               <div className="login-form">
                    <div className="form">
                         <h1>Sign up</h1>
                         <div className="input-group">
                              <input type="email" className='sign-input' contentEditable="true" placeholder="Email" name='email' onChange={(e) => setInput(e.target.value)} />
                              <input type="password" className='sign-input' placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)} />
                              <button className='sign-btn' onClick={setLocal}>Sign up</button>
                         </div>
                         <div className="d-flex captcha">
                              <div className="checkbox">
                                   <input type="checkbox" id="checkbox" />
                                   <label htmlFor="checkbox">Remember me</label>
                              </div>
                              <p className="need-help">Need help?</p>
                         </div>

                         <p className="back">Want to back? <NavLink to="/" className="clickhere">Click here</NavLink> <br /></p>
                         <p className="back2">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                    </div>
               </div>
          </div>
     )
}

export default Login