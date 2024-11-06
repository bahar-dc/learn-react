import React, { useEffect, useState } from 'react';
import SiteLogo from '../Assets/Images/site-logo.png';

export const Header = () => {
    const [activePath, setActivePath] = useState('');
    const [isNavOpen, setIsNavOpen] = useState(false); // New state variable for tracking menu open/close

    useEffect(() => {
        setActivePath(window.location.hash); // Gets the current URL hash
    }, []);

     const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    useEffect(() => {
        setActivePath(window.location.hash); // Gets the current URL hash

        // Add a listener to update activePath on hash change
        const handleHashChange = () => setActivePath(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // Scroll to the top whenever activePath changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePath]);


    return (
        <>
            <header className={`header-nav ${isNavOpen ? 'is-open' : ''}`}>
                <div className="site-container">
                    <a href="#/" className="link site-logo">
                        <img src={SiteLogo} alt="Site Logo" />
                    </a>
                    <nav aria-label="Primary Nav">
                        <ul>
                            <li>
                                <a href="#/" className={`link ${activePath === '#/' ? 'active' : ''}`}>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#/about-us" className={`link ${activePath === '#/about-us' ? 'active' : ''}`}>
                                    <span>About Us</span>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href='#/courses' className={`link ${activePath === '#/courses' ? 'active' : ''}`}>
                                    <span>Courses</span>
                                    <svg className="chevron" aria-hidden="true" viewBox="0 0 12 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M0.469668 0.969668C0.762558 0.676777 1.23744 0.676777 1.53033 0.969668L6 5.43934L10.4697 0.969668C10.7626 0.676777 11.2374 0.676777 11.5303 0.969668C11.8232 1.26256 11.8232 1.73744 11.5303 2.03033C9.37058 4.19007 8.15971 5.40095 6 7.5607L0.469668 2.03033C0.176777 1.73744 0.176777 1.26256 0.469668 0.969668Z"
                                            fill="#051F4E"></path>
                                    </svg>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="#/ielts-preparation" className={`link ${activePath === '#/ielts-preparation' ? 'active' : ''}`}>IELTS Preparation</a></li>
                                    <li><a href="#/celpip-training" className={`link ${activePath === '#/celpip-training' ? 'active' : ''}`}>CELPIP Training</a></li>
                                    {/* Add the other sub-menu items here */}
                                </ul>
                            </li>
                            <li>
                                <a href="#/pricing" className={`link ${activePath === '#/pricing' ? 'active' : ''}`}>
                                    <span>Pricing</span>
                                </a>
                            </li>
                            <li>
                                <a href="#/blog" className={`link ${activePath === '#/blog' ? 'active' : ''}`}>
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li>
                                <a href="#/contact" className={`link ${activePath === '#/contact' ? 'active' : ''}`}>
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                        <div className="navbar-buttons mobile">
                            <a href="#/enroll" className="link button blue primary">Register Now</a>
                        </div>
                    </nav>
                    <div className="navbar-buttons desktop">
                        <a href="#/enroll" className="link button blue primary">Register Now</a>
                        <button 
                        aria-label="Open Primary Navigation"
                        data-open="Open Primary Navigation"
                        data-closed="Close Primary Navigation"
                        aria-controls="primary-navigation"
                        className="hamburger-button link" onClick={toggleNav}></button>
                    </div>
                </div>
            </header>
        </>
    );
};
