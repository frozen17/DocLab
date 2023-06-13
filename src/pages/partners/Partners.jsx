import React, { useState, useEffect} from 'react'
import './Partners.css';

import constant from '../../utils/url.json'
import axios from 'axios'

const Partners = () => {
  const [partners, setPartners] = useState(null)


  const getData = async () => {
    try{
      await axios.get(`${constant.url}/partners`).then(res => setPartners(res.data))
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
      {console.log(partners)}
      <div>
        {partners?.map((partner) => (
          <div>
<h3 style={{
  fontSize: "30px",
  fontWeight: "700",
  textAlign: "center",
  margin: "30px 0"
}}>
        {localStorage.getItem("language") == '"ru"' &&
                          partner.acf.ru_text}
                        {localStorage.getItem("language") == '"en"' &&
                          partner.acf.en_text}
                        {localStorage.getItem("language") == '"kgz"' &&
                          partner.acf.kgz_text}
        </h3>
        <img style={{width: "60%", display: "block", marginLeft: "auto", marginRight: "auto", margin: "50px auto"}} src={partner.acf.image} alt="" />
      

  <div id="logo-grid">
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_one} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_two} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_three} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_four} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_five} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_six} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_seven} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_eight} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_nine} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_ten} alt=''/></a></div>

    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_eleven} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_twelve} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_thirteen} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_fourteen} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_fifteen} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_sixteen} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_seventeen} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_eighteen} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_nineteen} alt=''/></a></div>
    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_twenty} alt=''/></a></div>

    <div className="partner-logo"><a href="/#" ><img src={partner.acf.partner_twenty_one} alt=''/></a></div>
    
</div>
          </div>
        ))}
        
</div>
    </div>
  )
}

export default Partners
