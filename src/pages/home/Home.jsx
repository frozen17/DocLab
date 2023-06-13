import React, { useState, useEffect } from 'react'
import './Home.css';
import constant from '../../utils/url.json'
import axios from 'axios'
import { useTranslation } from "react-i18next";
import Team from '../team/Team';
import Partners from '../partners/Partners';
import Services from '../services/Services';
// import bgImg from '../../images/banner.jpg'

function Home() {
    const [mainpage, setMainPage] = useState(null)
    const {t} = useTranslation()



    const getData = async () => {
        try{
          await axios.get(`${constant.url}/mainpage`).then(res => setMainPage(res.data))
        }
           catch(error){
          console.log(error)
         }
       }
    
       useEffect(() => {
          getData();
       }, [])
    return (
        <div style={{
          width: "100%",
          margin: "0 auto",
        }}>
          {mainpage?.map((mainpage) => (
            <section key={mainpage.id} className="hero set-bg" style={{
              backgroundImage: `url(${mainpage.acf.background_img})`
            }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="hero__text">
                        <span>Cureline Group</span>
                        <h2>
                          {localStorage.getItem("language") == '"ru"' &&
                          mainpage.acf.ru_title}
                        {localStorage.getItem("language") == '"en"' &&
                          mainpage.acf.en_title}
                        {localStorage.getItem("language") == '"kgz"' &&
                          mainpage.acf.kgz_title}
                          </h2>
                        {/* <a href="/#" className="primary-btn normal-btn">Contact us</a> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
          ))}
              
            
            <Services/>
            <Team/>
            <Partners/>
        </div>
    )
}

export default Home;
