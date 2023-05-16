import React, { useState, useEffect } from 'react'
import constant from '../../utils/url.json'
import axios from 'axios'

function Home() {
    const [menu, setMenu] = useState(null)


    const getData = async () => {
        try{
          await axios.get(`${constant.url}/menu`).then(res => console.log(res.data))
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
            
        </div>
    )
}

export default Home;
