import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
    return (
        <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="header__top__left">
                            <li><i className="fa fa-phone"></i> 1-677-124-44227</li>
                            <li><i className="fa fa-map-marker"></i> Los Angeles Gournadi, 1230 Bariasl</li>
                            <li><i className="fa fa-clock-o"></i> Mon to Sat 9:00am to 18:00pm</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="header__top__right">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-dribbble"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""/></a>
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
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
    )
}

export default Header
