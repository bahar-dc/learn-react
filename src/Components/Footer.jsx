import SiteLogo from'../Assets/Images/site-logo-white.png';
export const Footer = () => {
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
                                <li><a className="link" href="#company"><span>Company</span></a>
                                    <ul>
                                        <li><a className="link" href="/corporate">Corporate</a></li>
                                        <li><a className="link" href="/about-us">About us</a></li>
                                        <li><a className="link" href="/en">Blog</a></li>
                                        <li><a className="link" href="/careers">Careers</a></li>
                                        <li><a className="link" href="/press">Press</a></li>
                                        <li><a className="link" href="/research">Research &amp; Studies</a></li>
                                    </ul>
                                </li>
                                <li><a className="link" href="#language"><span>Cources</span></a>
                                    <ul>
                                        <li><a className="link" href="/german">German</a></li>
                                        <li><a className="link" href="/english">English</a></li>
                                        <li><a className="link" href="/business-english">Business English</a></li>
                                        <li><a className="link" href="/french">French</a></li>
                                        <li><a className="link" href="/spanish">Spanish</a></li>
                                        <li><a className="link" href="/italian">Italian</a></li>
                                    </ul>
                                </li>
                                <li><a className="link" href="#how-it-works"><span>How it works</span></a>
                                    <ul>
                                        <li><a className="link" href="/how-it-works">Our platform</a></li>
                                        <li><a className="link" href="/resources">Blog</a></li>
                                    </ul>
                                </li>
                                <li><a className="link" href="#contact"><span>Support</span></a>
                                    <ul>
                                        <li><a className="link" href="/faq">FAQ</a></li>
                                        <li><a className="link diva"
                                                href="/contact">Contact us</a></li>
                                        <li><a className="link" href="/content-creators">Content creators</a></li>
                                        <li><a className="link" href="/affiliate-program">Affiliate</a></li>
                                        <li><a className="link" href="/contract-termination-request">Terminate Contracts
                                                Here</a></li>
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