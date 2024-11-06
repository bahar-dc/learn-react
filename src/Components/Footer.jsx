import SiteLogo from'../Assets/Images/site-logo.png';
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
                                        <li><a className="link" href="/german">IELTS Preparation</a></li>
                                        <li><a className="link" href="/english">CELPIP Test Preparation for Canadian Permanent Residency</a></li>
                                        <li><a className="link" href="/business-english">Score High on the PTE with Professional Guidance</a></li>
                                        <li><a className="link" href="/french">Learn English to Excel in Canada and Beyond</a></li>
                                        <li><a className="link" href="/spanish">Build Confidence & Master Public Speaking</a></li>
                                        <li><a className="link" href="/italian">Flourish Abroad with Everyday English</a></li>
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