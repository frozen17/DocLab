import React from 'react';
import './Header.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MenuIcon from '@mui/icons-material/Menu';
import curelineLogo from '../../curelineLogo.png'
import useLocalStorage from '../../hooks/use-localstorage';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


function Header(props) {
    const [age, setAge] = React.useState('');
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { window } = props;

    const {t} = useTranslation()
    const [language, setLanguage] = useLocalStorage('language', 'ru')


    const handleChangeLanguage = async(language, e) => {
        await i18n.changeLanguage(language)
    }
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };


    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: "300px" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        <Link
            to={"#"}
            className="navbar-brand d-flex align-items-center justify-content-center"
          >
            <img className="img-fluid me-3" src={curelineLogo} alt=""  style={{width: "150px"}} />
          </Link>
        </Typography>
        <Divider />
        <Box sx={{
          padding: "10px 25px"
        }}>
            
              <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                <Link  style={{color: "#111", margin: "8px 0"}} to={"#"} sx={{ color: '#fff' }}>

              </Link>
              <Link  style={{color: "#111", margin: "8px 0"}} to={"#"} sx={{ color: '#fff' }}>
sadasdsadas
              </Link>
              <Link  style={{color: "#111", margin: "8px 0"}} to={"#"} sx={{ color: '#fff' }}>
sadsadasd
              </Link>
              <Link  style={{color: "#111", margin: "8px 0"}} to={"#"} sx={{ color: '#fff' }}>
sadsadasd
              </Link>
              <Link  style={{color: "#111", margin: "8px 0"}} to={"#"} sx={{ color: '#fff' }}>
asdasdasd
              </Link>

                                                          <FormControl sx={{ m: 1, minWidth: 120, color: "white" }} size="small" variant="standard">
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={language}
                    onChange={() => handleChange}
                    sx={{color: "black", fontSize: "10px" ,'& .MuiInputBase-input': {
                        borderBottom: '3px solid white',
                        }}}
                  >
                    <MenuItem className='trans' onClick={() => handleChangeLanguage('en', setLanguage('en'))} value={'en'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" className="imgLng" alt=""/>English</MenuItem>
                    <MenuItem className='trans' onClick={() => handleChangeLanguage('ru', setLanguage('ru'))} value={'ru'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"  className="imgLng" alt="" />Русский</MenuItem>
                    <MenuItem className='trans' onClick={() => handleChangeLanguage('kgz', setLanguage('kgz'))} value={'kgz'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png" className="imgLng" alt="" /> Кыргызча</MenuItem>
                  </Select>
                </FormControl>
              </div>



        </Box>

        
      </Box>
    );

    

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row top-nav-head">
              <div>
                <ul className="header__top__left">
                  <li>
                    <LocalPhoneIcon fontSize="small" />
                    <a style={{ color: "#FFF" }} href="tel:+996707070707">
                      +996707070707
                    </a>
                  </li>
                  <li>
                    <LocationOnIcon fontSize="small" />
                    <a
                      style={{ color: "#FFF" }}
                      href="https://goo.gl/maps/4SM7JrTKWnbfbRAe6"
                      target="_blank"
                    >
                      Бишкек, ул. Замирбекова 123
                    </a>{" "}
                  </li>
                  <li>
                    <QueryBuilderIcon fontSize="small" /> Пн-Сб 9:00-18:00
                  </li>
                </ul>
              </div>
              <div>
                <div className="header__top__right">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/CurelineInc"
                  >
                    <FacebookIcon fontSize="small" />
                  </a>
                  <a target="_blank" href="https://twitter.com/Cureline_Inc">
                    <TwitterIcon fontSize="small" />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/">
                    <InstagramIcon fontSize="small" />
                  </a>
                </div>


              </div>
              <div>
                              <FormControl sx={{ m: 1, minWidth: 120, color: "white" }} size="small" variant="standard">
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={language}
                    onChange={handleChange}
                    sx={{color: "white", fontSize: "10px" ,'& .MuiInputBase-input': {
                        borderBottom: '3px solid white',
                        }}}
                  >
                    <MenuItem className='trans' onClick={() => handleChangeLanguage('en', setLanguage('en'))} value={'en'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" className="imgLng" alt=""/>English</MenuItem>
                    <MenuItem className='trans' onClick={() => handleChangeLanguage('ru', setLanguage('ru'))} value={'ru'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"  className="imgLng" alt="" />Русский</MenuItem>
                    <MenuItem className='trans' onClick={() => handleChangeLanguage('kgz', setLanguage('kgz'))} value={'kgz'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png" className="imgLng" alt="" /> Кыргызча</MenuItem>
                  </Select>
                </FormControl>
                
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <a href="#">
                  <img
                    src={curelineLogo}
                    style={{
                      width: "100px",
                    }}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="header__menu__option">
                <nav className="header__menu">
                  <ul>
                    <li className="active">
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="./about.html">About</a>
                    </li>
                    <li>
                      <a href="./services.html">Services</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="./pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="./doctor.html">Doctor</a>
                        </li>
                        <li>
                          <a href="./blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="./blog.html">News</a>
                    </li>
                    <li>
                      <a href="./contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="header__btn">
                  <a href="#" className="primary-btn">
                    Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas__open" style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none"
          }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, ml:"auto", display: { md: 'none' }, float:"inline-end"}}
          >
            <MenuIcon />
          </IconButton>
          </div>
        </div>

        <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="left"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { sm: 'block', md: 'none', width: "300px" },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </header>
    );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header
