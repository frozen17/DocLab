import React, { useState} from 'react'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Link } from 'react-router-dom';
import './/Undefined.css';
import { use } from 'i18next';
import { useTranslation } from "react-i18next";


const Undefined = () => {
    const {t} = useTranslation()

  return (
    // <!-- 404 Start -->
    <div style={{
        overflow: "hidden"
}}>

   
  <header className="top-header">
</header>

<div>
  <div className="starsec"></div>
  <div className="starthird"></div>
  <div className="starfourth"></div>
  <div className="starfifth"></div>
</div>


<div className="lamp__wrap">
  <div className="lamp">
    <div className="cable"></div>
    <div className="cover"></div>
    <div className="in-cover">
      <div className="bulb"></div>
    </div>
    <div className="light"></div>
  </div>
</div>
<section className="error">
  <div className="error__content">
    <div className="error__message message">
      <h1 className="message__title">{t("error-text")}</h1>
      <p className="message__text">{t("error-descr")}</p>
      <input type="text" name="" id=""  />
    </div>
    <div className="error__nav e-nav">
      <a href="/" className="btn"
      >{t("error-btn")}</a>
    </div>
  </div>

</section>
</div>
    // <!-- 404 End -->
  )
}

export default Undefined
