import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import constant from '../../utils/url.json'
import axios from 'axios'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';

import {icons} from '../../images/free-icon-medical-10191999.png'

const Services = () => {
  const cardsRef = useRef(null);

    const [services, setServices] = useState(null)
    const {t} = useTranslation()

    const getData = async () => {
        try{
          await axios.get(`${constant.url}/services`).then(res => setServices(res.data))
        }
           catch(error){
          console.log(error)
         }
       }
    
       useEffect(() => {
          getData();
       }, [])


       useEffect(() => {
        const handleMouseMove = (e) => {
          const cards = document.getElementById('cards-services');
          const cardList = cards.getElementsByClassName('card-services');
          for (const card of cardList) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
    
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
          }
        };
        const cardsElement = cardsRef.current;

        cardsElement.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          cardsElement.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
  return (
<div id='services'>

<h2 style={{textAlign: "center", margin: "30px auto", fontSize: "30px", fontWeight: "bold"}}>{t("home-text-2")}</h2>
    <section className='cards-background' id='card-services' ref={cardsRef}>
      
      <div id="cards-services">
        
        {services?.map((service) => (
            <div className="card-services" key={service.id}>
              <div className="card-content-services">
                <div className="card-image-services" style={{display: "flex", justifyContent: "space-between", alignItems: "start"}}>
                  <div>
                      01
                  </div>
                <img style={{width: "30px", color: "white", position: "center", backgroundSize: "center"}} src="https://img.icons8.com/?size=512&id=6587&format=png" alt="" />
                </div>
                <div className="card-info-wrapper-services">
                  <div className="card-info-services">
                    <i className="fa-duotone fa-apartment-services"></i>
                    <div className="card-info-title-services">
                      <h3>
                      {localStorage.getItem("language") == '"ru"' &&
                          service.acf.ru_title}
                        {localStorage.getItem("language") == '"en"' &&
                          service.acf.en_title}
                        {localStorage.getItem("language") == '"kgz"' &&
                          service.acf.kgz_title}
                        </h3>  
                      <h4 className='card-descr-services'>
                      {localStorage.getItem("language") == '"ru"' &&
                          service.acf.ru_title}
                        {localStorage.getItem("language") == '"en"' &&
                          service.acf.en_title}
                        {localStorage.getItem("language") == '"kgz"' &&
                          service.acf.kgz_title}
                      </h4>
                    </div>    
                   
                  </div>
                  
                </div>
              </div>
            </div>
        ))}
  
</div>
    </section>
</div>
  )
}

export default Services
