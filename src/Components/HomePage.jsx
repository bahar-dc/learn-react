import React from "react";
import { useEffect } from 'react';
import $ from "jquery";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { Twocolumntext } from "./Twocolumn";
import { Learning } from "./Learning";
import { FullWidthScrollImage } from "./FullWidthScrollImage";
import { StickyWIthText } from "./StickyWIthText";
import { Logolist } from "./Logolist";
import { Footer } from "./Footer";
import { Helmet } from 'react-helmet';

export const HomePage = () => {
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
	
		  $('li button.link').on('click', handleAccordionClick);
		
	
		// Cleanup function to remove the event listener when component unmounts
		return () => {
		  $('li button.link').off('click', handleAccordionClick);
		};
	  }, []);
    return (
        <>

            <Helmet>
                <title>Home - Transforming Learning into Lasting Success</title>
                <meta name="description" content="Home - Progresso Learning" />
            </Helmet>
            <Header/>
            <Banner />
            <Twocolumntext />
            <Learning />
            <FullWidthScrollImage />
            <StickyWIthText />
            <Logolist />

            <section className="accordion">
                <div className="progresso-container">
                   <div className="head">
                     <h2 className="toggle-heading">Why Choose Progresso? </h2>
                    <p>Boosting each student’s success is at the heart of Progresso Learning Institute’s mission. Alongside every course, our unique value-added services enhance your learning experience with benefits that foster growth and success. Here’s what you’ll gain:</p>
                   </div>
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
                                    <p>Experience Progresso's learning approach before you commit! Every student receives a complimentary starter class with any package purchase. Discover our engaging, student-focused environment first-hand. <br /><br />
                                    <a href="#/enroll">Sign Up Today and Claim Your Free Starter Class!</a></p>
                                </div>
                            </li>
                            <li>
                                <button className="link">
                                    <h2>Flexible Payment Options</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p>Progresso offers flexible payment plans for the 12- and 20-class packages, allowing you to spread out payments. Affordable learning without compromise!<br /><br />
                                    <a href="#/enroll">Sign Up Today and Claim Your Free Starter Class!</a></p>
                                </div>
                            </li>
                            <li>
                                <button className="link">
                                    <h2> Exclusive Access to Learning Resources</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p> All students enrolled in the 20-class packages get unlimited access to Progresso’s exclusive resources: on-demand webinars, recorded sessions, study guides, and additional practice materials.<br /><br />
                                    <a href="#/enroll">Sign Up Today and Claim Your Free Starter Class!</a></p>
                                </div>
                            </li>
                            <li>
                                <button className="link">
                                    <h2> Complimentary Practice Exam Sessions</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p> Get exam-ready with two free mock exams (IELTS, CELPIP, or PTE) included with all 12- and 20-class packages. Real exam simulations will prepare you to perform your best.<br /><br />
                                    <a href="#/enroll">Sign Up Today and Claim Your Free Starter Class!</a></p>
                                </div>
                            </li>
                            <li>
                                <button className="link">
                                    <h2> Bonus Class for Package Deals</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p>  Gain even more with our 8-class or larger packages, where you’ll receive a free bonus class in one of Progresso’s specialty courses, like Confidence Building, Interview Preparation, or the Newcomer Adjustment Program.<br /><br />
                                    <a href="#/enroll">Sign Up Today and Claim Your Free Starter Class!</a></p>
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
            
            <div className="space-80"></div>
            <Footer />
        </>
    )
}