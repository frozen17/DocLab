import React, { useState, useEffect } from "react";
import "./Home.css";
import constant from "../../utils/url.json";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Team from "../team/Team";
import Partners from "../partners/Partners";
import Services from "../services/Services";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { main } from "@popperjs/core";
import AboutUs from "../aboutus/AboutUs";
import Why from "../why/Why";
import { Navigate } from 'react-router-dom';

function Home() {
  const [mainpage, setMainPage] = useState(null);
  const { t } = useTranslation();

  const getData = async () => {
    try {
      await axios
        .get(`${constant.url}/mainpage`)
        .then((res) => setMainPage(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {mainpage?.map((mainpage) => (
      <div
        style={{
          width: "100vw",
          backgroundImage: `url(${(mainpage.acf.background_img)})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "center", // Use "cover" to stretch the image to cover the full container.
          margin: "0 auto",
        }}
        key={mainpage.id}
      >
        
          <section>
            <div className="container-home">
              <div className="row align-items-center py-lg-8 py-6">
                <div className="col-lg-6 text-start text-dark text-lg-start">
                  <h1
                    className="text-white fs-5 fs-xl-6 text-dark"
                    style={{ fontSize: "30px", fontWeight: "900" }}
                  >
                    {localStorage.getItem("language") == '"ru"' &&
                      mainpage.acf.ru_title}
                    {localStorage.getItem("language") == '"en"' &&
                      mainpage.acf.en_title}
                    {localStorage.getItem("language") == '"kgz"' &&
                      mainpage.acf.kgz_title}
                  </h1>
                  <p className="text-white py-lg-3 py-2 text-dark">
                    {localStorage.getItem("language") == '"ru"' &&
                      mainpage.acf.ru_descr}
                    {localStorage.getItem("language") == '"en"' &&
                      mainpage.acf.en_descr}
                    {localStorage.getItem("language") == '"kgz"' &&
                      mainpage.acf.kgz_descr}
                  </p>
                  <div className="d-sm-flex align-items-center align-items-center-btn-home justify-content-center btn-home-main gap-3">
                    <button className="btn-home btn-success-home text-black mb-3 w-75 text-dark">
                    {t("home-text-1")}
                    </button>
                    <button className="btn-home btn-outline-light-home mb-3 w-75 text-dark" href="#services">
                    {t("home-text-2")} <ArrowDownwardIcon fontSize="small" />
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 text-center text-lg-end mt-3 mt-lg-0">
                  <img
                    className="img-fluid"
                    src={mainpage.acf.photo}
                    alt=""
                  />
                </div>
              </div>

              <div className="swiper">
                <div
                  className="swiper-container swiper-shadow swiper-theme"
                  data-swiper='{"slidesPerView":2,"breakpoints":{"640":{"slidesPerView":2,"spaceBetween":20},"768":{"slidesPerView":4,"spaceBetween":40},"992":{"slidesPerView":5,"spaceBetween":40},"1024":{"slidesPerView":4,"spaceBetween":50},"1025":{"slidesPerView":6,"spaceBetween":50}},"spaceBetween":10,"grabCursor":true,"pagination":{"el":".swiper-pagination","clickable":true},"loop":true,"freeMode":true,"autoplay":{"delay":2500,"disableOnInteraction":false}}'
                >
                  <div
                    className="swiper-wrapper"
                    style={{ background: "transparent" }}
                  >
                    <Partners />
                  </div>
                </div>
              </div>
            </div>
          </section>
        
      </div>))}
      <Services />
      <Team />
      <AboutUs/>
      <Why/>
    </div>
  );
}

export default Home;
