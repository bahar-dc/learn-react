import SiteLogo from'../Assets/Images/site-logo.png';

export const Header = () => {
    return (
        <>
        <header className="header-nav">
            <div className="site-container">
                 <a href="#/" className="link site-logo">
                    <img src={SiteLogo} alt="Site Logo" />
                </a>
                <nav aria-label="Primary Nav">
                    <ul>
                        <li>
                            <a href="#/" className="link">
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#/about" className="link">
                                <span>About Us</span>
                            </a>
                        </li>
                        <li className="dropdown">
                            <a href='#/cources' className="link">
                                <span>Courses</span>
                                <svg className="chevron" aria-hidden="true" viewBox="0 0 12 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M0.469668 0.969668C0.762558 0.676777 1.23744 0.676777 1.53033 0.969668L6 5.43934L10.4697 0.969668C10.7626 0.676777 11.2374 0.676777 11.5303 0.969668C11.8232 1.26256 11.8232 1.73744 11.5303 2.03033C9.37058 4.19007 8.15971 5.40095 6 7.5607L0.469668 2.03033C0.176777 1.73744 0.176777 1.26256 0.469668 0.969668Z"
                                        fill="#051F4E"></path>
                                </svg>
                            </a>
                            <ul className="sub-menu">
                                <li><a href="#/ielts-prepartion" className="link">IELTS Preparation</a></li>
                                <li><a href="#/celpip-training" className="link">CELPIP Training</a></li>
                                <li><a href="#/pte-coaching" className="link">PTE Coaching</a></li>
                                <li><a href="#/english-language-course" className="link">English Language Classes</a></li>
                                <li><a href="#/confindence-building-workshops" className="link">Confidence Building Workshops</a></li>
                                <li><a href="#/public-speaking" className="link">Public Speaking Mastery</a></li>
                                <li><a href="#/interview-prepartion" className="link">Interview Preparation</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/pricing" className="link">
                                <span>Pricing</span>
                            </a>
                        </li>
                        <li>
                            <a href="#/blocks" className="link">
                                <span>Blocks</span>
                            </a>
                        </li>
                        <li>
                            <a href="#/blog" className="link">
                                <span>Blog</span>
                            </a>
                        </li>
                        <li>
                            <a href="#/contact" className="link">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                    <div className="navbar-buttons mobile">
                        {/* <a href="/login" className="link button blue secondary in-mobile-nav">Log in</a> */}
                        <a href="#/get-started" className="link button blue primary">Register Now</a>
                    </div>
                </nav>
                <div className="navbar-buttons desktop">
                    {/* <a href="/login" className="link button blue secondary in-mobile-nav">Log in</a> */}
                    <a href="#/get-started" className="link button blue primary">Register Now</a>
                    <button aria-label="Open Primary Navigation" data-open="Open Primary Navigation"
                        data-closed="Close Primary Navigation" aria-controls="primary-navigation"
                        className="hamburger-button link"></button>
                    </div>
                </div>
            </header>
        </>
    )
}