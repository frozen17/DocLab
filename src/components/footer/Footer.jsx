import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import footer_bg from '../../footer-bg.jpg'

import biobank from '../../biobank.png';
import curelineLogo from '../../curelineLogo.png'

const Footer = () => {
    return (
        <footer className="footer set-bg" style={{
            backgroundImage: footer_bg
        }} data-setbg={footer_bg}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <a href="/#"><img src={curelineLogo} style={{
                                width: "150px"
                            }} alt=""/></a>
                        </div>
                        <p>7176 Blue Spring Lane <br />Santa Monica, CA 90403</p>
                        <ul>
                            <li>Info.colorlib@gmail.com</li>
                            <li>+84 123 456 789</li>
                        </ul>
                        <div className="footer__social">
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
                </div>
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Company</h6>
                        <ul>
                            <li><a href="/#">About Us</a></li>
                            <li><a href="/#">Services</a></li>
                            <li><a href="/#">Our Works</a></li>
                            <li><a href="/#">Career</a></li>
                            <li><a href="/#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Services</h6>
                        <ul>
                            <li><a href="/#">Architecture</a></li>
                            <li><a href="/#">Interior Design</a></li>
                            <li><a href="/#">Exterior Design</a></li>
                            <li><a href="/#">Planning</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="footer__address">
                        <h6>Get In Touch</h6>
                        <p>7176 Blue Spring Lane <br />Santa Monica, CA 90403</p>
                        <ul>
                            <li>Info.colorlib@gmail.com</li>
                            <li>+84 123 456 789</li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</footer>
    );
};

export default Footer;