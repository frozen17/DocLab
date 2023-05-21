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
import i18n from "../../i18n";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


function Header(props) {
    const [age, setAge] = React.useState('');
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { window } = props;

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
                      target="blank"
                      
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
                    target="blank"
                    href="https://www.facebook.com/CurelineInc"
                  >
                    <FacebookIcon fontSize="small" />
                  </a>
                  <a target="blank" href="https://twitter.com/Cureline_Inc">
                    <TwitterIcon fontSize="small" />
                  </a>
                  <a target="blank" href="https://www.instagram.com/">
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
                <a href="/#">
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
                      <Link href="/#">Home</Link>
                    </li>
                    <li>
                      <Link href="/#">About</Link>
                    </li>
                    <li>
                      <Link href="/#">Services</Link>
                    </li>
                    <li>
                      <Link href="/#">Pages</Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/#">Pricing</Link>
                        </li>
                        <li>
                          <Link href="/#">Doctor</Link>
                        </li>
                        <li>
                          <Link href="/#">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/#">News</Link>
                    </li>
                    <li>
                      <Link href="/#">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header__btn">
                  <Link href="/#" className="primary-btn">
                    Appointment
                  </Link>
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
            display: { sm: 'block', md: 'none' },
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
