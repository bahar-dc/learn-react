import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import $ from "jquery";
import { useEffect } from 'react';
import bannerimage from'../Assets/Images/Uploads/course-img-02-min.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-scroll';

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
	
		  $('li button.link').on('click', handleAccordionClick);
		
	
		// Cleanup function to remove the event listener when component unmounts
		return () => {
		  $('li button.link').off('click', handleAccordionClick);
		};
	  }, []);


    return (
        <>

            <Helmet>
                <title>Pricing - Transforming Learning into Lasting Success</title>
                <meta name="description" content="Pricing - Progresso Learning" />
            </Helmet>

            <Header  />

              <section className="hero-home trustpilot trustpilot-inside-hero progresso-flex--first">
                <div className="bg-container">
                    <div className="bg-img bg-img--desktop">
                        <img  src={bannerimage} alt="Banner pricing" />
                    </div>
                </div>
                <div className="progresso-container single-col">
                    <div className="text-col">
                        <h1>At Progresso Learning we value all our courses equally</h1>
                        <p>At Progresso Learning we value all our courses equally</p>
                        <div className="btn-wrapper">
                            <Link
                                className="link button blue primary"
                                to="jumplinks"
                                smooth={true}
                                duration={500}
                                offset={-100}>
                                See prices and schedules
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

           <section id="see-prices" className="courses-cards progresso-block">
            <div className="progresso-container">
                <div id="jumplinks"></div>
                <h2 className="toggle-heading title title--lg-dt">Pricing Plans : We have the same price for all our courses</h2>
              

                <ul className="cards pricing-cards">
                    <li>
                        <article>
                            <div>
                                <div className="card-title title title--sm-mb">One-on-One Classes</div>
                            </div>
                            <p className="text">
                                Ideal for individuals who prefer focused, personalized attention or who
                                have specific learning goals, such as passing a high-stakes exam,
                                mastering public speaking, or adapting quickly to life in Canada.
                            </p>
                            <ul>
                                {/* <li className="text">Tailored Lesson Plans</li>
                                <li className="text">Dedicated Feedback & Coaching</li>
                                <li className="text">Flexible Scheduling</li>
                                <li className="text">Focused Practice Tests</li>
                            */}
                                <li>
                                <span className="text">
                                    <strong>Per Class: </strong>
                                    <strong className='price'>$35</strong>
                                </span>
                                </li>
                                <li>
                                <span className="text">
                                    <strong>8-Class Package: </strong>
                                    <strong className='price'>$270</strong> (save 5%)
                                </span>
                                </li>
                                <li>
                                <span className="text">
                                    <strong>12-Class Package: </strong>
                                    <strong className='price'>$375</strong> (save 10%)
                                </span>
                                </li>
                                <li>
                                <span className="text">
                                    <strong>20-Class Package: </strong>
                                    <strong className='price'>$599</strong> (save 15%) + 1 Free Bonus Class
                                </span>
                                </li>
                            </ul>
                            <a
                                href="#/enroll"
                                className="link button secondary blue"
                            >
                                Enroll Now
                            </a>
                        </article>
                    </li>
                    <li>
                        <article className="gradient">
                        <div>
                            <div className="card-title title title--sm-mb">Study with Buddy</div>
                        </div>
                        <p className="text">
                            Ideal for friends, family members, or partners who want to learn
                            together in a more affordable, semi-private setting.
                        </p>
                        <ul>
                            {/* <li className="text">Shared Learning Experience</li>
                            <li className="text">Personalized, Pair-Based Instruction</li>
                            <li className="text">Dynamic Class Activities</li> */}
                        
                            <li>
                            <span className="text">
                                <strong>Per Class: </strong>
                                <strong className='price'>$32</strong>
                            </span>
                            </li>
                            <li>
                            <span className="text">
                                <strong>8-Class Package: </strong>
                                <strong className='price'>$245</strong> (save 5%)
                            </span>
                            </li>
                            <li>
                            <span className="text">
                                <strong>12-Class Package: </strong>
                                <strong className='price'>$345</strong> (save 10%)
                            </span>
                            </li>
                            <li>
                            <span className="text">
                                <strong>20-Class Package: </strong>
                                <strong className='price'>$545</strong> (save 15%) + 1 Free Bonus Class
                            </span>
                            </li>
                        </ul>
                        <a
                            href="#/enroll"
                            className="link button primary white"
                        >
                            Enroll Now
                        </a>
                        </article>
                    </li>
                    <li>
                        <article>
                        <div>
                            <div className="card-title title title--sm-mb">Small Group Classes</div>
                        </div>
                        <p className="text">
                            Ideal for individuals who enjoy a collaborative learning environment
                            and prefer interaction with peers, while still having a relatively
                            small class size for individualized attention.
                        </p>
                        <ul>
                            {/* <li className="text">Interactive Learning Environment</li>
                            <li className="text">Peer Support & Feedback</li>
                            <li className="text">Structured Learning Modules</li>
                            <li className="text">Group Practice Sessions</li> */}
                        
                            <li>
                            <span className="text">
                                <strong>Per Class: </strong>
                                <strong className='price'>$28</strong>
                            </span>
                            </li>
                            <li>
                            <span className="text">
                                <strong>8-Class Package: </strong>
                                <strong className='price'>$210</strong> (save 5%)
                            </span>
                            </li>
                            <li>
                            <span className="text">
                                <strong>12-Class Package: </strong>
                                <strong className='price'>$300</strong> (save 10%)
                            </span>
                            </li>
                            <li>
                            <span className="text">
                                <strong>20-Class Package: </strong>
                                <strong className='price'>$475</strong> (save 15%) + 1 Free Bonus Class
                            </span>
                            </li>
                        </ul>
                        <a
                            href="#/enroll"
                            className="link button secondary blue "
                        >
                            Enroll Now
                        </a>
                        </article>
                    </li>
                </ul>


                
               <div className="bottom-data">
                 <h3>Promotion Offer Ends on <span>28th of February 2025:</span> All the 8-class, 12-class, and 20-class packages all include FIVE additional FREE bonus classes that will include:</h3>
                <ul>
                    <li>A trial class of 45 minutes with our Progresso Learning Expert</li>
                    <li>A test assessment and discussion of the mistakes and how to improve it</li>
                    <li>A Cheat Sheet for each of the courses separately</li>
                    <li>A Full Practice Test 1 week before the exam or competition you are participating in</li>
                    <li>Vocabulary Course 101: We will provide a specific tailor made Vocabulary List for your course</li>
                </ul>
               </div>
            
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

            <Footer  />
            
        </>
    )
}
