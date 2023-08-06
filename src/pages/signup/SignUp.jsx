import React, { useEffect, useState } from "react";
import axios from "axios";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import constant from "../../utils/url.json";
import SignUpApi from "./SignUpApi";


const SignUp = () => {

const {username, setName} = useState("")
const {useremail, setEmail} = useState("")
const {userpass, setPass} = useState("")


const handleSubmit = (e) => {
  axios
      .post("http://backdoclab.vr.kg/simple-jwt-login/v1/users", {
        username,
        useremail,
        userpass,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Enable sending cookies along with the request
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
}
  useEffect(() => {
    handleSubmit();
  }, []);



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
          value={username} onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          id="useremail"
          value={useremail} onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="userpass"
          value={userpass} onChange={(e) => setPass(e.target.value)}
        />
        <button className="button-auth" type="submit">
          Sign Up
        </button>
      </form>
      
    </div>
  );
};

export default SignUp;
