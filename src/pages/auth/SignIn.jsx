import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const SignIn = () => {
  return (
<div className="form-container-auth sign-in-container-auth">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container-auth">
            <a href="#" className="social-auth">
              <FacebookIcon fontSize='small'/>
            </a>
            <a href="#" className="social-auth">
              <GoogleIcon fontSize='small'/>
            </a>
            <a href="#" className="social-auth">
              <TwitterIcon fontSize='small'/>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#" className="social-auth">Forgot your password?</a>
          <button className='button-auth' >Sign In</button>
        </form>
      </div>
  )
}

export default SignIn
