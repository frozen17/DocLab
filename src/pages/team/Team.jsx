import React, { useState, useEffect} from 'react';
import './Team.css';

import constant from '../../utils/url.json'
import axios from 'axios'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Team = () => {
    const [ teams, setTeams] = useState(null)

    const getData = async () => {
        try{
          await axios.get(`${constant.url}/team`).then(res => setTeams(res.data))
        }
           catch(error){
          console.log(error)
         }
       }
    
       useEffect(() => {
          getData();
       }, [])

    return (
        <section className="team spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-title">
                        <span>Our Team</span>
                        <h2>Our Expert Doctors</h2>
                    </div>
                </div>
            </div>
            {console.log(teams)}
            <div className="row">
                {teams?.map((team) => (
                                  <div className="col-lg-4 col-md-6 col-sm-6" key={team.id}>
                    <div className="team__item">
                        <img src={team.acf.photo} alt=""/>
                        <h5>
                        {localStorage.getItem("language") == '"ru"' &&
                          team.acf.ru_name_employee}
                        {localStorage.getItem("language") == '"en"' &&
                          team.acf.en_name_employee}
                        {localStorage.getItem("language") == '"kgz"' &&
                          team.acf.kgz_name_employee}
                        </h5>
                        <span>
                        {localStorage.getItem("language") == '"ru"' &&
                          team.acf.ru_position_employee}
                        {localStorage.getItem("language") == '"en"' &&
                          team.acf.en_position_employee}
                        {localStorage.getItem("language") == '"kgz"' &&
                          team.acf.kgz_position_employee}
                        </span>
                        <div className="team__item__social">
                            <a href="#"><FacebookIcon fontSize="medium" /></a>
                            <a href="#"><TwitterIcon fontSize="medium" /></a>
                            <a href="#"><InstagramIcon fontSize="medium" /></a>
                        </div>
                    </div>
                </div>  
                ))}

            </div>
        </div>
    </section>
    );
};

export default Team;