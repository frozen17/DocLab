import React, { useState, useEffect } from "react";
import "./Partners.css";
import constant from "../../utils/url.json";
import axios from "axios";

const Partners = () => {
  const [partners, setPartners] = useState(null);

  const getData = async () => {
    try {
      await axios
        .get(`${constant.url}/partners`)
        .then((res) => setPartners(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {console.log(partners)}
        <div className="logo-slider">
        <div className="logo-slide-track" >
    {partners?.map((partner) => (


      		<div className="slide" key={partner.id}>
			        <img src={partner.acf.partner_logo} alt="" />
		      </div>
         



    ))}

		  </div>
	</div>
</div>
  );
};

export default Partners;
