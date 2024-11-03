import React from 'react';
import $ from "jquery";
import { useEffect } from 'react';



export const Faqs = () => {

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
			<section className="accordion-with-animation bgc-transparent">
				<div className="site-container">
					<h2>Frequently asked <span>questions</span></h2>
					<h3>General Questions</h3>
					<ul>
						<li>
							<button className="link">
								<span className="text">Who are your courses designed for?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>Our courses are tailored for non-native English speakers looking to improve their language skills for tests like CELPIP and IELTS, business communication, and everyday confidence in English.
</p>
								</div>
							</div>
						</li>
						<li>
							<button className="link">
								<span className="text">How are your courses delivered?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>All our courses are delivered online through interactive video sessions, allowing you to learn from anywhere at your convenience.</p>
								</div>
							</div>
						</li>
						<li>
							<button className="link">
								<span className="text">Do I need to be at a specific English level to join?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>We offer courses for a range of levels, from beginners to advanced. Before starting, we’ll assess your current skills to place you in the best course for your needs.</p>
								</div>
							</div>
						</li>
					</ul>
					<h3>About CELPIP and IELTS Courses</h3>
					<ul>
						<li>
							<button className="link">
								<span className="text">How long does it take to prepare for the CELPIP/IELTS exams?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>Preparation time varies by individual. Our courses are designed to help you progress efficiently, and our instructors will provide a personalized plan based on your goals.</p>
								</div>
							</div>
						</li>
						<li>
							<button className="link">
								<span className="text">What areas of the CELPIP/IELTS exams do your courses cover?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>We cover all sections of each exam, including speaking, listening, reading, and writing, with targeted practice and feedback to help you succeed.</p>
								</div>
							</div>
						</li>
					</ul>
					<h3>Business English Courses</h3>
					<ul>
						<li>
							<button className="link">
								<span className="text">How does the Business English course help with my career?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>Our Business English course focuses on skills like professional email writing, presentations, meetings, and negotiations, essential for career advancement in English-speaking workplaces.</p>
								</div>
							</div>
						</li>
						<li>
							<button className="link">
								<span className="text">Can the Business English course be customized to my industry?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>Absolutely! We offer specialized lessons and materials tailored to specific industries, ensuring you develop the most relevant skills for your field.</p>
								</div>
							</div>
						</li>
					</ul>
					<h3>Confidence and Communication Skills</h3>
					<ul>
						<li>
							<button className="link">
								<span className="text">How do your courses build confidence in speaking?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>We use real-life scenarios, role-playing, and personalized feedback to help you gain confidence and communicate naturally in English, whether socially or professionally.</p>
								</div>
							</div>
						</li>
						<li>
							<button className="link">
								<span className="text">Do you offer public speaking practice?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>Yes! Our confidence-building courses include public speaking exercises designed to improve your presentation skills and ease with speaking in front of groups.</p>
								</div>
							</div>
						</li>
					</ul>
					<h3>Course Structure and Learning Experience</h3>
					<ul>
						<li>
							<button className="link">
								<span className="text">How are the classes structured?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>Each course consists of interactive lessons, practical exercises, and personalized feedback sessions to ensure continuous improvement and confidence building.</p>
								</div>
							</div>
						</li>
						<li>
							<button className="link">
								<span className="text">What support is available if I need extra help?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>Our instructors are available for one-on-one sessions, and we offer additional resources like practice materials, mock tests, and Q&A sessions.</p>
								</div>
							</div>
						</li>
					</ul>
					<h3>Enrollment and Fees</h3>
					<ul>
						<li>
							<button className="link">
								<span className="text">How do I enroll in a course?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>You can sign up through our website, where you’ll find an easy registration form. Once registered, you’ll receive details on how to get started.</p>
								</div>
							</div>
						</li>
						<li>
							<button className="link">
								<span className="text">What are the payment options?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>We accept various payment methods, including credit/debit cards and online payment systems. Payment plans may also be available for certain courses.</p>
								</div>
							</div>
						</li>
						<li>
							<button className="link">
								<span className="text">Do you offer a free trial or demo lesson?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>Yes, we offer a free trial session for you to experience our teaching style and course format before committing.</p>
								</div>
							</div>
						</li>
						<li>
							<button className="link">
								<span className="text">Are there discounts if I enroll in multiple courses?</span>
								<span className="chevron">
									<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2"
										strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</span>
							</button>
							<div className="panel">
								<div>
									<p>Yes! We offer discounts for students who enroll in more than one course. Check our website for the latest offers.</p>
								</div>
							</div>
						</li>
					</ul>
					<div className='buttons-row'>
						{/* <a className="link button primary blue" href="/contact">Contact us</a> */}
						<a className="link button secondary blue" href="/faqs">Read all FAQs</a>
					</div>
				</div>
			</section>
        </>
    )
}
