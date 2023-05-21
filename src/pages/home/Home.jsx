import React, { useState, useEffect } from 'react'
import constant from '../../utils/url.json'
import axios from 'axios'
import { useTranslation } from "react-i18next";
import Team from '../team/Team';

function Home() {
    const [menu, setMenu] = useState(null)
    const {t} = useTranslation()



    const getData = async () => {
        try{
          await axios.get(`${constant.url}/menu`).then(res => setMenu(res.data))
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
            {menu?.map((menu) => (
              <div key={menu.id}>
                {t("main")}
                <h1>
                  {localStorage.getItem('language') === '"en"' && menu.acf.menu_one}
                </h1>
                
              </div>
            ))}
            <Team/>
        </div>
    )
}

export default Home;
