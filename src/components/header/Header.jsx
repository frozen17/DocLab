import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MenuIcon from '@mui/icons-material/Menu';
import curelineLogo from '../../curelineLogo.png'

function Header() {
    return (
        <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="header__top__left">
                            <li><LocalPhoneIcon fontSize="small"/> 1-677-124-44227</li>
                            <li><LocationOnIcon fontSize="small"/> Los Angeles Gournadi, 1230 Bariasl</li>
                            <li><QueryBuilderIcon fontSize="small"/> Mon to Sat 9:00am to 18:00pm</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="header__top__right">
                            <a href="#"><FacebookIcon fontSize="small"/></a>
                            <a href="#"><TwitterIcon fontSize="small"/></a>
                            <a href="#"><InstagramIcon fontSize="small"/></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="header__logo">
                        <a href="#"><img src={curelineLogo} style={{
                            width: "100px"
                        }} alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="header__menu__option">
                        <nav className="header__menu">
                            <ul>
                                <li className="active"><a href="./index.html">Home</a></li>
                                <li><a href="./about.html">About</a></li>
                                <li><a href="./services.html">Services</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="./pricing.html">Pricing</a></li>
                                        <li><a href="./doctor.html">Doctor</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">News</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="header__btn">
                            <a href="#" className="primary-btn">Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="canvas__open">
                <MenuIcon fontSize='small'/>
            </div>
        </div>
    </header>
    )
}

export default Header
