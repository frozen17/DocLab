import React, { useState, useEffect } from "react";
import "./Partners.css";

import constant from "../../utils/url.json";
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

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
      <div>
        {partners?.map((partner) => (
          <div key={partner.id}>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
                margin: "30px 0",
              }}
            >
              {localStorage.getItem("language") == '"ru"' &&
                partner.acf.ru_text}
              {localStorage.getItem("language") == '"en"' &&
                partner.acf.en_text}
              {localStorage.getItem("language") == '"kgz"' &&
                partner.acf.kgz_text}
            </h3>
            <img
              style={{
                width: "60%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                margin: "50px auto",
              }}
              src={partner.acf.image}
              alt=""
            />

            <div id="logo-grid">
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_one_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_one_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_one_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
                <div className="partner-logo">
                  
                    <img src={partner.acf.partner_one} alt="" />
                  
                </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_two_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_two_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_two_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_two} alt="" />
                
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_three_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_three_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_three_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_three} alt="" />
                
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_four_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_four_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_four_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_four} alt="" />
                
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_five_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_five_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_five_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_five} alt="" />
                
              </div>
              </Tooltip>
      

              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_six_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_six_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_six_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >


              <div className="partner-logo">
                
                  <img src={partner.acf.partner_six} alt="" />
                
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_seven_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_seven_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_seven_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_seven} alt="" />
                
              </div>
              </Tooltip>

              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_eight_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_eight_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_eight_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_eight} alt="" />
                
              </div>
              </Tooltip>

              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_nine_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_nine_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_nine_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_nine} alt="" />
               
              </div>
              </Tooltip>

              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_ten_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_ten_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_ten_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_ten} alt="" />
                
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_eleven_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_eleven_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_eleven_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
               
                  <img src={partner.acf.partner_eleven} alt="" />
                
              </div>
              </Tooltip>

              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_twelve_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_twelve_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_twelve_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_twelve} alt="" />
                
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_thirteen_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_thirteen_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_thirteen_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
               
                  <img src={partner.acf.partner_thirteen} alt="" />
                
              </div>
              </Tooltip>

              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_fourteen_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_fourteen_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_fourteen_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_fourteen} alt="" />
                
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_fifteen_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_fifteen_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_fifteen_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_fifteen} alt="" />
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_sixteen_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_sixteen_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_sixteen_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_sixteen} alt="" />
              
              </div>
              </Tooltip>

               <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_seventeen_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_seventeen_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_seventeen_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_seventeen} alt="" />
                
              </div>
              </Tooltip>

              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_eighteen_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_eighteen_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_eighteen_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_eighteen} alt="" />
                
              </div>
              </Tooltip>

              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_nineteen_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_nineteen_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_nineteen_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_nineteen} alt="" />
                
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_twenty_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_twenty_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_twenty_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_twenty} alt="" />
               
              </div>
              </Tooltip>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      {localStorage.getItem("language") == '"ru"' &&
                        partner.acf.partner_twenty_one_about_ru}
                      {localStorage.getItem("language") == '"en"' &&
                        partner.acf.partner_twenty_one_about_en}
                      {localStorage.getItem("language") == '"kgz"' &&
                        partner.acf.partner_twenty_one_about_kgz}
                    </Typography>
                  </React.Fragment>
                }
                fontSize="40px"
                sx={{ fontSize: "50px" }}
                followCursor
              >
              <div className="partner-logo">
                
                  <img src={partner.acf.partner_twenty_one} alt="" />
                
              </div>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
