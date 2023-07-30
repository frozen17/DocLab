import React, { useEffect, useState } from "react";
import axios from "axios";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import constant from "../../utils/url.json";
import SignUpApi from "./SignUpApi";


const SignUp = (props) => {

  const [APIDetailsSignUp, setAPIDetailsSignUp] = useState({
    user: '',    
    email: '',
    pass: '',
  })
const [signUpDetails, setSignUpDetails] = useState({
    user: '',
    email: '',
    pass: '',
})

const handleChange = (e) =>  {
    const { name, value } = e.target
    setSignUpDetails(prev => {
        return (
            { ...prev, [name]: value }
        )
    })
}

const handleSubmit = (e) => {
  e.preventDefault();
    setAPIDetailsSignUp({ ...signUpDetails })
}

  return (
    <div className="form-container-auth sign-up-container-auth">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="social-container-auth">
          <a href="#" className="social-auth">
            <FacebookIcon fontSize="small" />
          </a>
          <a href="#" className="social-auth">
            <GoogleIcon fontSize="small" />
          </a>
          <a href="#" className="social-auth">
            <TwitterIcon fontSize="small" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          placeholder="Name"
          id="username"
          name="user" value={signUpDetails.user} onChange={handleChange} 
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email" value={signUpDetails.email} onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="pass" value={signUpDetails.pass} onChange={handleChange}
        />
        <button className="button-auth" type="submit">
          Sign Up
        </button>
        <SignUpApi APIDetailsSignUp={APIDetailsSignUp} setUsername={props.setUsername} setIsLoggedIn={props.setIsLoggedIn} setServerMessage={props.setServerMessage} />
      </form>
      
    </div>
  );
};

export default SignUp;
