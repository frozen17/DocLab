import logo from './logo.svg';
import {useState} from 'react'

import './style.css';
import './bootstrap.min.css';
import './App.css';
import Home from './pages/home/Home';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';

import * as Icon from "https://cdn.skypack.dev/react-feather@2.0.9";

import SmsIcon from '@mui/icons-material/Sms';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcon from '@mui/icons-material/Add';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Footer from './components/footer/Footer';

function App() {


	
    const [status, setStatus] = useState(false)
    const [loader, setLoader] = useState(true);
    const spinner = document.getElementById('spinner');

    if(spinner){
      setTimeout(() => {
        spinner.style.display="none";
        setLoader(false)
      }, 4000)
    }
    
    
    function handleClick(){
      setStatus(prevStats=>!prevStats);
    }
    
    function checkStatus(){
      return status ? 'appear' : 'hidden';
    }

    const handleClose = () => {
      setStatus(prevStats=>prevStats);
    };

  return (
      !loader &&     <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <div className="container-float">
			<div className="wrapper-float" onClose={handleClose} >
        <button className={checkStatus()} style={{backgroundColor: "#27A7E7"}}>
					<TelegramIcon sx={{color: "white", }}/>
				</button>
				<button className={checkStatus()} style={{backgroundColor: "#25D366"}}>
					<WhatsAppIcon sx={{color: "white"}}/>
				</button>

				<button onClick={handleClick} className={status ? 'rotate' : 'normal'}>
					{status ? <AddIcon fontSize='large' sx={{color: "white"}}/> : <SmsIcon fontSize="medium" sx={{color: "white"}}/>}
				</button>
			</div>
		</div>
    <Footer/>
    </div>
  );
}

export default App;
