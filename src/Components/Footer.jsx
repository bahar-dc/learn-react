import React, { useEffect, useState } from 'react';
import SiteLogo from'../Assets/Images/site-logo.png';
export const Footer = () => {
    const [activePath, setActivePath] = useState('');

     useEffect(() => {
        setActivePath(window.location.hash); // Gets the current URL hash

        // Add a listener to update activePath on hash change
        const handleHashChange = () => setActivePath(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <>
            <div style={{background:'#3498db'}}>
                <footer className="footer">
                    <div className="site-container">
                        <div className="footer-info">
                            <img src={SiteLogo} alt="Site logo white " />
                        </div>
                        <nav className="footer-nav" >
                            <ul>
                                <li>
                                    <a className="link" href="#company"><span>Company</span></a>
                                    <ul>
                                        <li><a className="link" href="/about-us">About us</a></li>
                                        <li><a className="link" href="/en">Blog</a></li>
                                        <li><a className="link" href="/careers">Careers</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="link" href="#/courses"><span>Cources</span></a>
                                    <ul>
                                        {/* <li><a className="link" href="/german">IELTS Preparation</a></li>
                                        <li><a className="link" href="/english">CELPIP Test Preparation for Canadian Permanent Residency</a></li>
                                        <li><a className="link" href="/business-english">Score High on the PTE with Professional Guidance</a></li>
                                        <li><a className="link" href="/french">Learn English to Excel in Canada and Beyond</a></li>
                                        <li><a className="link" href="/spanish">Build Confidence & Master Public Speaking</a></li>
                                        <li><a className="link" href="/italian">Flourish Abroad with Everyday English</a></li> */}

                                        <li><a href="#/ielts-preparation" className={`link ${activePath === '#/ielts-preparation' ? 'active' : ''}`}>IELTS Preparation</a></li>
                                        <li><a href="#/celpip-training" className={`link ${activePath === '#/celpip-training' ? 'active' : ''}`}>CELPIP Training</a></li>
                                        <li><a href="#/pte-coaching" className={`link ${activePath === '#/pte-coaching' ? 'active' : ''}`}>PTE Coaching</a></li>
                                        <li><a href="#/english-language-courses" className={`link ${activePath === '#/english-language-classes' ? 'active' : ''}`}>English Language Classes</a></li>
                                        <li><a href="#/confidence-and-public-speaking" className={`link ${activePath === '#/confidence-and-public-speaking' ? 'active' : ''}`}>Confidence & Public Speaking Essentials</a></li>
                                        <li><a href="#/interview-and-cultural-adaptation" className={`link ${activePath === '#/interview-and-cultural-adaptation' ? 'active' : ''}`}> Interview & Cultural Adaptation</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="link" href="#contact"><span>Support</span></a>
                                    <ul>
                                        <li><a className="link" href="#/faqs">FAQ</a></li>
                                        <li><a className="link diva" href="#/contact-us">Contact us</a></li>
                                        <li><a className="link" href="#/consultation">Free Consultation</a></li>
                                    </ul>
                                </li>
                            </ul><a className="link" href="/become-a-teacher">Become a teacher</a>
                        </nav>
                    </div>
                    <div className="site-container">
                        <div className="footer-copyright">
                            <p>Copyright 2024 Progresso - All Rights Reserved</p>
                            <ul className="links">
                                <li><a href="/privacy" className="link">Privacy Policy</a></li>
                                <li><a href="/terms" className="link">Terms</a></li>
                            </ul>
                           
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}