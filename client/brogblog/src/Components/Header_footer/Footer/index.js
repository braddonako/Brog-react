import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/fontawesome-free-solid';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/fontawesome-free-solid';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='footerBackgroundColor'>
            <div className='container'>
                <div className='logo'>
                    BROG
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
                                <a href = 'https://www.linkedin.com/in/braddonakowski/' className='linkedIn'>
                                    <FontAwesomeIcon 
                                    icon={faLinkedinIn}
                                    className='icon'
                                    />
                                </a>
                                <div className='nfo'>
                                    <div>Click the logo to</div>
                                    <div>Connect with me on LinkedIn</div>
                                </div>
                            </div>

                            <div className='tag'>
                                <a href='https://www.github.com/braddonako' className='github'>
                                    <FontAwesomeIcon 
                                    icon={faGithub}
                                    className='icon'
                                    />
                                </a>
                                <div className='nfo'>
                                    <div>Click the logo to</div>
                                    <div>access my Github</div>
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
                        <h2>Share your thoughts</h2>
                        <div>
                            <div>I love receiving feedback, and am always open to suggestions. If you have a topic you would like me to discuss, just want to chat, or you want to grab a cup of coffee (aka 'fee) shoot me a message!</div>
                        </div>
                    </div>
                    
                </div>

            </div>
            
        </footer>
    );
};

export default Footer;