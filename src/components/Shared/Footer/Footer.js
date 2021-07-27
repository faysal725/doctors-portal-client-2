import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebookF, faGoogle, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import './Footer.css'



library.add(fab)



const Footer = () => {
    return (
        <div className="container">
            <br /><br /><br />
        <div  className="row d-flex">
            <div className="col-md-3 text-secondary footer__content ">
                <br /><br />
                <ul>
                    <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of personal Deaseae</li>
                    <li>Tooth Extraction</li>
                    <li>Check up</li>
                </ul>
            </div>
            <div className="col-md-3 text-secondary footer__content">
                
                <ul>
                    <h5>Services</h5>
                    <br />
                <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of personal Deaseae</li>
                    <li>Tooth Extraction</li>
                    <li>Check up</li>
                    <li>check up</li>
                    <li>check up</li>
                </ul>
            </div>
            <div className="col-md-3 text-secondary footer__content ">
                
                <ul>
                <h5>Oral Health</h5>
                <br />
                <li>Oral Health</li>
                    <li>Check Up</li>
                    <li>Treatment of personal Deaseae</li>
                    <li>Tooth Extraction</li>
                    <li>Check up</li>
                    <li>check up</li>
                    <li>check up</li>
                </ul>
            </div>
            <div className="col-md-3 text-secondary footer__content ">
               
                <ul>
                    <h5>Our Address</h5>
                    <br />
                    <li>Check Up</li>
                </ul>
                <br />
                <div>
                    <div className="row d-flex">
                        <div className="col footer__icon"> <FontAwesomeIcon className="icons" icon={faFacebookF} />  </div>
                        <div className="col footer__icon"> <FontAwesomeIcon icon={faGoogle} />   </div>
                        <div className="col footer__icon"> <FontAwesomeIcon icon={faTwitter} />  </div>
                    </div>
                    <br />
                    <div>
                        <p>CALL NOW</p>
                        <button  className="call__button">+65462245645646</button>
                    </div>
                </div>
            </div>
        </div>
        <footer style={{textAlign:"center"}} className="text-secondary">copyright {(new Date()).getFullYear()} All Right Reserved</footer>
        <br />
        </div>
    );
};

export default Footer;