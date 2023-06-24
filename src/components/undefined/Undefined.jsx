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

   
  <header class="top-header">
</header>

<div>
  <div class="starsec"></div>
  <div class="starthird"></div>
  <div class="starfourth"></div>
  <div class="starfifth"></div>
</div>


<div class="lamp__wrap">
  <div class="lamp">
    <div class="cable"></div>
    <div class="cover"></div>
    <div class="in-cover">
      <div class="bulb"></div>
    </div>
    <div class="light"></div>
  </div>
</div>
<section class="error">
  <div class="error__content">
    <div class="error__message message">
      <h1 class="message__title">{t("error-text")}</h1>
      <p class="message__text">{t("error-descr")}</p>
      <input type="text" name="" id=""  />
    </div>
    <div class="error__nav e-nav">
      <Link to="/" class="btn"
      >{t("error-btn")}</Link>
    </div>
  </div>

</section>
</div>
    // <!-- 404 End -->
  )
}

export default Undefined
