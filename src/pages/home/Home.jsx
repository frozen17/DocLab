import React, { useState, useEffect } from 'react'
import constant from '../../utils/url.json'
import axios from 'axios'
import { useTranslation } from "react-i18next";

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
              <div>
                {t("main")}
              </div>
            ))}
        </div>
    )
}

export default Home;
