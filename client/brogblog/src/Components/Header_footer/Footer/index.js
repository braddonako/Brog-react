import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/fontawesome-free-solid';
import {faClock} from '@fortawesome/fontawesome-free-solid';
import {faEnvelope} from '@fortawesome/fontawesome-free-solid';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='footerBackgroundColor'>
            <div className='container'>
                <div className='logo'>
                    Brog
                </div>
                <div className='wrapper'>
                    <div className='left'>
                        <h2>Contact Information</h2>
                        <div className='business_nfo'>
                            <div className='tag'>
                                <FontAwesomeIcon 
                                icon={faCompass}
                                className='icon'
                                />
                                <div className='nfo'>
                                    <div>Location</div>
                                    <div>Denver, CO</div>
                                </div>
                            </div>
                        <div className='tag'>
                                <FontAwesomeIcon 
                                icon={faLinkedinIn}
                                className='icon'
                                />
                                <div className='nfo'>
                                    <div>Phone</div>
                                    <div>123456789</div>
                                </div>
                            </div>
                        <div className='tag'>
                                <FontAwesomeIcon 
                                icon={faClock}
                                className='icon'
                                />
                                <div className='nfo'>
                                    <div>Working Hours</div>
                                    <div>9am-5pm</div>
                                </div>
                            </div>
                        <div className='tag'>
                                <FontAwesomeIcon 
                                icon={faEnvelope}
                                className='icon'
                                />
                                <div className='nfo'>
                                    <div>Email</div>
                                    <div>braddonakowski@yahoo.com</div>
                                </div>
                        </div>
                        </div>                      
                    </div>
                    <div className='left'>
                        <h2>Be the first to know</h2>
                        <div>
                            <div>Hit us up for updates and what not! We love customers</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;