import React, { useState, useEffect } from 'react';
import './About.css';
import axios from 'axios';
import constant from "../../utils/url.json";

import { useTranslation } from "react-i18next";
import Why from '../why/Why';

const AboutUs = () => {
    const [about, setAbout] = useState(null)
    const { t } = useTranslation();

    const getData = async () => {
        try {
          await axios
            .get(`${constant.url}/aboutus`)
            .then((res) => setAbout(res.data));
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);


  return (
    <div>
      <main className="main" id="top">
        {about?.map((about) => (
            <div key={about.id}>
      <section className=" text-center py-9" style={{
        backgroundColor: `${about.acf.color_page}`
        
      }}>

        <div className="container-about">
          <p className="fs-1" style={{color: `${about.acf.text_color}`}}>{t("aboutus")}</p>
          <div className="col-12 col-md-7 mx-auto">
            <h1 className="fs-lg-4 fs-md-4 fs-3 my-4 about-text"style={{color: `${about.acf.text_color}`}} >
            {localStorage.getItem("language") === '"ru"' &&
                      about.acf.text_ru}
                    {localStorage.getItem("language") === '"en"' &&
                      about.acf.text_en}
                    {localStorage.getItem("language") === '"kgz"' &&
                      about.acf.text_kgz}
            </h1>
          </div>
        </div>

      </section>

      <section className="pb-0">

        <div className="container-about">
          <div className="gallery-wraper">
            <div className="img-wraper"><img className="img-fluid" src={about.acf.images_one} alt="" /></div>
            <div className="img-wraper"><img className="img-fluid" src={about.acf.images_two} alt="" /></div>
            <div className="img-wraper"><img className="img-fluid" src={about.acf.images_three} alt="" /></div>
            <div className="img-wraper"><img className="img-fluid" src={about.acf.images_four} alt="" /></div>
            <div className="img-wraper"><img className="img-fluid" src={about.acf.images_five} alt="" /></div>
          </div>
          <div className="px-xl-8 px-md-5 px-3 py-8" style={{
            textAlign: "center"
          }}>
            <p className="fs-1">
            {localStorage.getItem("language") === '"ru"' &&
                      about.acf.text_descr_ru}
                    {localStorage.getItem("language") === '"en"' &&
                      about.acf.text_descr_en}
                    {localStorage.getItem("language") === '"kgz"' &&
                      about.acf.text_descr_kgz}
            </p>
          </div>
        </div>

      </section>
            </div>
        ))}
    </main>
    <Why/>
    </div>
  )
}

export default AboutUs
