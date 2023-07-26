import React, { useState, useEffect } from 'react'
import './Home.css';
import constant from '../../utils/url.json'
import axios from 'axios'
import { useTranslation } from "react-i18next";
import Team from '../team/Team';
import Partners from '../partners/Partners';
import Services from '../services/Services';
import Feedback from '../feedback/Feedback';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


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
      <div>

        <div style={{
  width: '100vw',
  backgroundImage: "url(https://img.freepik.com/free-vector/medical-healthcare-blue-color_1017-26807.jpg?w=2000&t=st=1690206775~exp=1690207375~hmac=7be95f9e27e95c832b57bcfba26cd7178221ba8fa1e91952e08522110d967345)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover", // Use "cover" to stretch the image to cover the full container.
  margin: "0 auto",
        }}>
          {mainpage?.map((mainpage) => (
            <section key={mainpage.id}>

            <div className="container-home">
              <div className="row align-items-center py-lg-8 py-6">
                <div className="col-lg-6 text-start text-dark text-lg-start" >
                  <h1 className="text-white fs-5 fs-xl-6 text-dark" style={{fontSize: "30px", fontWeight: "900"}}>
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
                  <div className="d-sm-flex align-items-center justify-content-center btn-home-main gap-3">
                    <button className="btn-home btn-success-home text-black mb-3 w-75 text-dark">Подробнее о нас</button>
                    <button className="btn-home btn-outline-light-home mb-3 w-75 text-dark">Наши услуги <ArrowDownwardIcon fontSize='small'/></button>
                  </div>
                </div>
                <div className="col-lg-6 text-center text-lg-end mt-3 mt-lg-0"><img className="img-fluid" src={mainpage.acf.background_img} alt="" /></div>
              </div>

              <div class="swiper">
              <div class="swiper-container swiper-shadow swiper-theme" data-swiper='{"slidesPerView":2,"breakpoints":{"640":{"slidesPerView":2,"spaceBetween":20},"768":{"slidesPerView":4,"spaceBetween":40},"992":{"slidesPerView":5,"spaceBetween":40},"1024":{"slidesPerView":4,"spaceBetween":50},"1025":{"slidesPerView":6,"spaceBetween":50}},"spaceBetween":10,"grabCursor":true,"pagination":{"el":".swiper-pagination","clickable":true},"loop":true,"freeMode":true,"autoplay":{"delay":2500,"disableOnInteraction":false}}'>
                <div class="swiper-wrapper" style={{background: "transparent"}}>
              {/* here will be partner */}
                  <Partners/>

              {/* here will be partner */}
              </div>
              </div>
            </div>

            </div>
            </section>

    
          ))}


</div>
{/* <section>

<div className="container-home">
  <div className="row align-items-center py-lg-8 py-6">
    <div className="col-lg-6 text-start text-dark text-lg-start" >
      <h1 className="text-white fs-5 fs-xl-6 text-dark" style={{fontSize: "30px"}}>

      </h1>
      <p className="text-white py-lg-3 py-2 text-dark">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
      <div className="d-sm-flex align-items-center gap-3">
        <button className="btn-home btn-success-home text-black mb-3 w-75">Buy Template</button>
        <button className="btn-home btn-outline-light-home mb-3 w-75">Explore</button>
      </div>
    </div>
    <div className="col-lg-6 text-center text-lg-end mt-3 mt-lg-0"><img className="img-fluid" src="https://o.remove.bg/downloads/ef85b30e-a7b7-4f38-a436-8922dd234395/5119486-removebg-preview.png" alt="" /></div>
  </div>
</div>
</section> */}
              


            
            <Services/>
            <Team/>
            {/* <Feedback/> */}
        
        </div>
    )
}

export default Home;
