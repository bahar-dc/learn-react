export const Footer = () => {
    return (
        <>
            <div style={{background:'#051F4E'}}>
                <footer className="footer">
                    <div className="site-container">
                        <div className="footer-info">
                            <h2>Ielts Logo Here</h2>
                           
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
                                        <li><a className="link" href="/reviews">Lingoda Reviews</a></li>
                                    </ul>
                                </li>
                                <li><a className="link" href="#language"><span>Language</span></a>
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
                                        <li><a className="link" href="/resources">Resources</a></li>
                                        <li><a className="link"
                                                href="/discount">UNiDAYS
                                                student discount</a></li>
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
                            <p>Copyright 2024 Lingoda GmbH. Zimmerstr. 69, 10117 Berlin - All Rights Reserved</p>
                            <ul className="links">
                                <li><a href="/imprint" className="link">Imprint</a></li>
                                <li><a href="/privacy" className="link">Privacy</a></li>
                                <li><a href="/terms" className="link">Terms</a></li>
                            </ul>
                           {/* <ul className="social">
                                 <li>
                                    <a href="https://www.linkedin.com/company/lingoda-gmbh" className="link linkedin"
                                        title="Linkedin"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                            </path>
                                        </svg>
                                    </a></li>
                                <li><a href="https://twitter.com/lingoda" className="link twitter" title="Twitter"><svg
                                            aria-hidden="true" viewBox="0 0 34 32" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.0839257 0.0195694C0.0699773 0.0404911 1.19979 1.58179 2.58765 3.43691C3.97552 5.29205 6.92559 9.23943 9.14338 12.2035L13.1745 17.5945L12.9164 17.8874C12.77 18.0478 9.80593 21.249 6.33279 25.0011C2.85965 28.7601 0.00720977 31.8567 0.000235592 31.8915C-0.0137128 31.9264 0.59304 31.9543 1.46481 31.9473L2.95031 31.9404L3.4385 31.4034C3.7105 31.1104 6.23515 28.3835 9.05272 25.3358C11.8703 22.2881 14.2554 19.7077 14.3531 19.5961L14.5274 19.3938L15.9223 21.2629C16.6894 22.2881 18.8026 25.1196 20.6159 27.5466L23.9217 31.9543H28.9779C33.1834 31.9543 34.0272 31.9404 33.9993 31.8637C33.9784 31.8079 32.6952 30.0783 31.1469 28.0069C29.5986 25.9426 27.8272 23.5714 27.2135 22.7484C26.5928 21.9255 24.7725 19.4775 23.1545 17.3225C21.5365 15.1605 20.2114 13.3612 20.2114 13.3333C20.2114 13.2845 28.7617 4.00182 31.67 0.898315L32.4999 0.0125961H30.9725L29.4522 0.0195694L27.6738 1.94444C26.6974 3.00452 24.3052 5.59891 22.3525 7.69814L18.8166 11.52L14.5274 5.78721L10.2314 0.0474663L5.17507 0.0125961C2.39238 -0.00832748 0.097874 -0.00135231 0.0839257 0.0195694ZM12.0656 6.19869C13.7184 8.41648 16.271 11.8268 17.7356 13.7866C19.2001 15.7394 22.4501 20.0912 24.9608 23.4458C27.4715 26.8074 29.5498 29.5901 29.5847 29.6389C29.6265 29.7017 29.1314 29.7226 27.3251 29.7226H25.0166L20.4415 23.5993C9.88264 9.4905 4.55437 2.36289 4.4916 2.25828C4.44976 2.19551 4.924 2.17459 6.74426 2.17459H9.05272L12.0656 6.19869Z">
                                            </path>
                                        </svg>
                                    </a></li>
                                <li><a href="https://www.youtube.com/channel/UC6AYbs_IpIj5uwwL_8PlVyw"
                                        className="link youtube" title="Youtube"><svg aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path
                                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                            </path>
                                        </svg>
                                    </a></li>
                                <li><a href="https://www.facebook.com/lingoda" className="link facebook"
                                        title="Facebook"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512">
                                            <path
                                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                            </path>
                                        </svg>
                                    </a></li>
                                <li><a href="https://instagram.com/lingoda_official" className="link instagram"
                                        title="Instagram"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                            </path>
                                        </svg>
                                    </a></li> 
                            </ul>*/}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}