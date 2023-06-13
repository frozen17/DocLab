import React, { useState, useEffect } from 'react';
import './Services.css';
import constant from '../../utils/url.json'
import axios from 'axios'
import { useTranslation } from "react-i18next";

const Services = () => {
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
  return (
<section className="c-section">
    <h2 className="c-section__title" style={{
        color: "black",
        fontSize: "40px",
        textAlign: "center"
    }}>{t("service")}</h2>
    <div style={{width: "100px", backgroundColor: "red", margin: "0 auto"}}>

    </div>
    <ul className="c-services">
        {services?.map((service) => (
        <li className="c-services__item" key={service.id}>
            <h3 className='service-text' style={{fontSize: "25px"}}>
            {localStorage.getItem("language") == '"ru"' &&
                          service.acf.ru_title}
                        {localStorage.getItem("language") == '"en"' &&
                          service.acf.en_title}
                        {localStorage.getItem("language") == '"kgz"' &&
                          service.acf.kgz_title}
            </h3>
            <p style={{fontSize: "15px"}}>
            {localStorage.getItem("language") == '"ru"' &&
                          service.acf.ru_descr}
                        {localStorage.getItem("language") == '"en"' &&
                          service.acf.en_descr}
                        {localStorage.getItem("language") == '"kgz"' &&
                          service.acf.kgz_descr}
            </p>
        </li>    
        ))}

        
       
    </ul>
    </section>
  )
}

export default Services;
