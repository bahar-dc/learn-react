import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import $ from "jquery";
import { useEffect } from 'react';

export const Pricing = () => {

    	useEffect(() => {
            const handleAccordionClick = function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).closest('li').removeClass('active');
                $(this).siblings('.panel').slideUp(300);
            } else {
                $('li button.link').removeClass('active');
                $('li').removeClass('active');
                $('.panel').slideUp(300);
                $(this).closest('li').addClass('active');
                $(this).addClass('active');
                $(this).siblings('.panel').slideDown(300);
            }
            };
        
            if ($('.accordion-with-animation').length > 0) {
            $('li button.link').on('click', handleAccordionClick);
            }
        
            // Cleanup function to remove the event listener when component unmounts
            return () => {
            $('li button.link').off('click', handleAccordionClick);
            };
        }, []);

    return (
        <>

            <Header  />

            <section className="hero trustpilot style-standard  style-checklist progresso-grid--first">
                <div className="bg-container">
                    <img  src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-hero-d.jpg" alt="" />
                </div>
                <div className="progresso-container">
                    <div className="content-container">
                        <div className="eyebrow">
                            <div><span>Available in German, English, Italian and Spanish </span></div>
                        </div>
                        <h1>Progresso Pricing Plans</h1>
                        <p>Choose the ideal learning format for your needs and save more with our bundled packages.</p>
                        <div className="btn-wrapper"><a className="link button blue primary" href="#/see-prices">See prices and schedules</a></div>
                    </div>
                </div>
            </section>

           <section id="see-prices" className="courses-cards progresso-block">
            <div className="progresso-container">
                <h2 className="toggle-heading title title--lg-dt">Pricing Plans</h2>
                <ul className="cards cards--3">
                    <li>
                        <article>
                        <div>
                            <div className="card-title title title--sm-mb">1:1 Classes</div>
                        </div>
                        <p className="text">1-month challenge with big rewards – for learners who want extra motivation.</p>
                        <ul>
                            <li><span className="text"><strong>Per Class : </strong>$35</span></li>
                            <li> <span className="text"><strong>8-Class Package : </strong>$270 (save 5%)</span></li>
                            <li><span className="text"><strong>12-Class Package : </strong>$375 (save 10%)</span></li>
                            <li><span className="text"><strong>20-Class Package : </strong>$599 (save 15%) + 1 Free Bonus Class</span></li>
                        </ul>
                        <a href="https://www.lingoda.com/en/sprint/" className="link button secondary blue">Enroll Now</a>
                        </article>
                    </li>
                    <li>
                        <article className="gradient">
                        <div>
                            <div className="card-title title title--sm-mb">Small Group</div>
                        </div>
                        <p className="text">Build your own language journey – for learners who want more flexibility.</p>
                        <ul>
                             <li><span className="text"><strong>Per Class : </strong>$28</span></li>
                            <li> <span className="text"><strong>8-Class Package: </strong>$210 (save 5%)</span></li>
                            <li><span className="text"><strong>12-Class Package: </strong>$300 (save 10%)</span></li>
                            <li><span className="text"><strong>20-Class Package: </strong>$475 (save 15%) + 1 Free Bonus Class</span></li>
                        </ul>
                        <a href="https://www.lingoda.com/en/flex/" className="link button primary white">Enroll Now</a>
                        </article>
                    </li>
                    <li>
                        <article>
                        <div>
                            <div className="card-title title title--sm-mb">Bring Your Buddy</div>
                        </div>
                        <p className="text">Pre-booked classes with a dedicated team – for learners who want structure and support.</p>
                        <ul>
                            <li><span className="text"><strong>Per Class : </strong>$32</span></li>
                            <li> <span className="text"><strong>8-Class Package : </strong>$245 (save 5%)</span></li>
                            <li><span className="text"><strong>12-Class Package : </strong>$345 (save 10%)</span></li>
                            <li><span className="text"><strong>20-Class Package : </strong>$545 (save 15%) + 1 Free
Bonus Class</span></li>
                        </ul>
                        <a href="https://www.lingoda.com/en/teams/" className="link button secondary blue">Enroll Now</a>
                        </article>
                    </li>
                </ul>
                <p>Select your preferred package and start your journey with our professional instructors.</p>
            </div>
            </section>


            <section className="text-banner alt progresso-block">
                <div className="progresso-container">
                    <div style={{background: '#3498db'}}>
                        <h2 style={{color:'#ffffff'}} className="title title--lg-dt title--sm-mb">Join Progresso Learning Institute and unlock your potential in a new country. Sign up now for competitive packages and exceptional resources.</h2>
                    </div>
                </div>
            </section>


            <section className="accordion">
                <div className="progresso-container">
                    <h2 className="toggle-heading">Why Choose Progresso? </h2>
                    <p>Boosting each student’s success is at the heart of Progresso Learning Institute’s mission. Alongside every course, our unique value-added services enhance your learning experience with benefits that foster growth and success. Here’s what you’ll gain:</p>
                    <div className="content">
                        <div>
                            <ul>
                            <li>
                                <button className="link">
                                    <h2>Free Starter Class for New Students</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p>Experience Progresso's learning approach before you commit! Every student receives a complimentary starter class with any package purchase. Discover our engaging, student-focused environment first-hand. <br />
                                    <a href="#/">Sign Up Today and Claim Your Free Starter Class!</a></p>
                                </div>
                            </li>
                            <li>
                                <button className="link">
                                    <h2> Flexible Payment Options</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p>  Progresso offers flexible payment plans for the 12- and 20-class packages, allowing you to spread out payments. Affordable learning without compromise!<br />
                                    <a href="#/">Sign Up Today and Claim Your Free Starter Class!</a></p>
                                </div>
                            </li>
                            <li>
                                <button className="link">
                                    <h2> . Exclusive Access to Learning Resources</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p>  All students enrolled in the 20-class packages get unlimited access to Progresso’s exclusive resources: on-demand webinars, recorded sessions, study guides, and additional practice materials.<br />
                                    <a href="#/">Sign Up Today and Claim Your Free Starter Class!</a></p>
                                </div>
                            </li>
                            <li>
                                <button className="link">
                                    <h2>  Complimentary Practice Exam Sessions</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p>  Get exam-ready with two free mock exams (IELTS, CELPIP, or PTE) included with all 12- and 20-class packages. Real exam simulations will prepare you to perform your best.<br />
                                    <a href="#/">Sign Up Today and Claim Your Free Starter Class!</a></p>
                                </div>
                            </li>
                            <li>
                                <button className="link">
                                    <h2>  Bonus Class for Package Deals</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p>  Gain even more with our 8-class or larger packages, where you’ll receive a free bonus class in one of Progresso’s specialty courses, like Confidence Building, Interview Preparation, or the Newcomer Adjustment Program.<br />
                                    <a href="#/">Sign Up Today and Claim Your Free Starter Class!</a></p>
                                </div>
                            </li>

                        </ul>
                        <div className="buttons-row">
                            <a className="link button primary blue" href="#/contact">Contact us</a>
                        </div>
                        </div>
                        <div>
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/02/faq-picture-rectangular.jpeg" alt="Text" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer  />
            
        </>
    )
}
