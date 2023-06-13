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
            <h3 className='service-text' >
            {localStorage.getItem("language") == '"ru"' &&
                          service.acf.ru_title}
                        {localStorage.getItem("language") == '"en"' &&
                          service.acf.en_title}
                        {localStorage.getItem("language") == '"kgz"' &&
                          service.acf.kgz_title}
            </h3>
            <p>
            {localStorage.getItem("language") == '"ru"' &&
                          service.acf.ru_descr}
                        {localStorage.getItem("language") == '"en"' &&
                          service.acf.en_descr}
                        {localStorage.getItem("language") == '"kgz"' &&
                          service.acf.kgz_descr}
            </p>
        </li>    
        ))}

        {/* <li className="c-services__item">
        <h3 className='service-text'>UX Auditing</h3>
        <p >If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.</p>
        </li>
        <li className="c-services__item">
        <h3 className='service-text'>Front End Development</h3>
        <p >We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we&rsquo;re happy to do so.</p>
        </li>
        <li className="c-services__item">
        <h3 className='service-text'>UX Consultation</h3>
        <p >If you don&rsquo;t know what kind of service to request from us, don&rsquo;t worry. We can help and see what fits your business and your budget.</p>
        </li>
        <li className="c-services__item">
        <h3 className='service-text'>Mobile Apps Design</h3>
        <p >To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
        </li>
        <li className="c-services__item">
        <h3 className='service-text'>UX Research</h3>
        <p >It&rsquo;s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more. </p>
        </li> */}
       
    </ul>
    </section>
  )
}

export default Services
