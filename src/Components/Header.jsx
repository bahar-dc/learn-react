import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <>
        <header className="header-nav">
            <div className="site-container">
                <a href="/home" className="link site-logo" title="Ielts">
                    Ielts
                </a>
                <nav aria-label="Primary Nav">
                    <ul>
                        <li>
                            <a href="/how-it-works" className="link">
                                <span>How it works</span>
                            </a>
                        </li>
                        <li className="dropdown">
                            <button className="link">
                                <span>Languages</span>
                                <svg className="chevron" aria-hidden="true" viewBox="0 0 12 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M0.469668 0.969668C0.762558 0.676777 1.23744 0.676777 1.53033 0.969668L6 5.43934L10.4697 0.969668C10.7626 0.676777 11.2374 0.676777 11.5303 0.969668C11.8232 1.26256 11.8232 1.73744 11.5303 2.03033C9.37058 4.19007 8.15971 5.40095 6 7.5607L0.469668 2.03033C0.176777 1.73744 0.176777 1.26256 0.469668 0.969668Z"
                                        fill="#051F4E"></path>
                                </svg>
                            </button>
                            <ul className="sub-menu">
                                <li><a href="/german" className="link">German</a></li>
                                <li><a href="/english" className="link">English</a></li>
                                <li><a href="/business-english" className="link">Business English</a></li>
                                <li><a href="/french" className="link">French</a></li>
                                <li><a href="/spanish" className="link">Spanish</a></li>
                                <li><a href="/italian" className="link">Italian</a></li>
                            </ul>
                        </li>
                        <li>
                            <button className="link">
                                <span>Courses</span>
                            </button>
                        </li>
                        <li>
                            <button className="link">
                                <span>More</span>
                            </button>
                        </li>
                    </ul>
                    <div className="navbar-buttons mobile">
                        <a href="/login" className="link button blue secondary in-mobile-nav">Login</a>
                        <a href="/get-started" className="link button blue primary">Get started</a>
                    </div>
                </nav>
                <div className="navbar-buttons desktop">
                    <a href="/login" className="link button blue secondary in-mobile-nav">Login</a>
                    <a href="/get-started" className="link button blue primary">Get started</a>
                    <button aria-label="Open Primary Navigation" data-open="Open Primary Navigation"
                        data-closed="Close Primary Navigation" aria-controls="primary-navigation"
                        className="hamburger-button link"></button>
                    </div>
                </div>
            </header>
        </>
    )
}