import logo from './logo.svg';
import {useState} from 'react'

import './style.css';
import './bootstrap.min.css';
import './App.css';
import Home from './pages/home/Home';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';


import SmsIcon from '@mui/icons-material/Sms';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcon from '@mui/icons-material/Add';
import Footer from './components/footer/Footer';
import Team from './pages/team/Team';
import Undefined from './components/undefined/Undefined';
import Topbar from './components/topbar/Topbar';
import Auth from './pages/auth/Auth';
import AboutUs from './pages/aboutus/AboutUs';
import Servicess from './pages/servicess/Servicess';

function App() {


	
    const [status, setStatus] = useState(false)
    const [loader, setLoader] = useState(true);
    const spinner = document.getElementById('spinner');

    if(spinner){
      setTimeout(() => {
        spinner.style.display="none";
        setLoader(false)
      }, 3000)
    }
    
    
    function handleClick(){
      setStatus(prevStats=>!prevStats);
    }
    
    function checkStatus(){
      return status ? 'appear' : 'hidden';
    }

    const handleClose = () => {
      setStatus((prevState) => !prevState);
    };

  return (
      !loader &&     <div className="App">
        <Topbar/>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-company' element={<AboutUs/>}/>
        <Route path='/ourspecialists' element={<Team/>}/>
        <Route path='*' element={<Undefined/>}/>
        <Route path='/auth' element={<Auth/>}/>

        <Route path='/test' element={<Servicess/>}/>
      </Routes>

      <div className="container-float"onClose={handleClose}>
			<div className="wrapper-float"  >
        <button className={checkStatus()} style={{backgroundColor: "#27A7E7"}}>
					<TelegramIcon sx={{color: "white", }} fontSize="small"/>
				</button>
				<button className={checkStatus()} style={{backgroundColor: "#25D366"}}>
					<WhatsAppIcon sx={{color: "white"}} fontSize="small"/>
				</button>

				<button onClick={handleClick} style={{backgroundColor: "#ff4745"}} className={status ? 'rotate' : 'normal'}>
					{status ? <AddIcon fontSize='large' sx={{color: "white"}}/> : <SmsIcon fontSize="small" sx={{color: "white"}}/>}
				</button>
			</div>
		</div>
    <Footer/>
    
    </div>
  );
}

export default App;
