import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from "react-i18next";


const SignIn = () => {
  const { t } = useTranslation();
  return (
<div className="form-container-auth sign-in-container-auth">
        <form action="#">
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
          <span>{t("use-account")} </span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder={t("password")} />
          <a href="#" className="social-auth">{t("forgot-passw")}</a>
          <button className='button-auth' >{t("login")}</button>
        </form>
      </div>
  )
}

export default SignIn
