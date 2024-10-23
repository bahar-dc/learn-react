import React from 'react';
import $ from "jquery";
import { useState, useEffect } from 'react';



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
        <section className="accordion-with-animation">
					<div className="site-container">
						<h2>Frequently asked <span>questions</span></h2>
						<ul>
                            <li>
                                <button className="link">
                                    <span className="text">Question 1?</span>
                                    <span className="chevron">
                                        <svg aria-hidden="true" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </button>
								<div className="panel">
									<div>
										<p>After scheduling a class on our platform, you will be able to join the class
											with 2-4 fellow students from around the world. The teacher will introduce
											themselves and begin teaching the lesson using learning materials that you
											can download at the end of class. During the class, we encourage you to
											interact not only with the materials and the teacher but also with the
											students. Towards the end of class, the teacher will recap the lesson and
											ensure everybody has understood the lesson.</p>
									</div>
								</div>
							</li>
                            <li>
                                <button className="link">
                                    <span className="text">Question 2?</span>
                                    <span className="chevron">
                                        <svg aria-hidden="true" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </button>
								<div className="panel">
									<div>
										<p>After scheduling a class on our platform, you will be able to join the class
											with 2-4 fellow students from around the world. The teacher will introduce
											themselves and begin teaching the lesson using learning materials that you
											can download at the end of class. During the class, we encourage you to
											interact not only with the materials and the teacher but also with the
											students. Towards the end of class, the teacher will recap the lesson and
											ensure everybody has understood the lesson.</p>
									</div>
								</div>
							</li>
                            <li>
                                <button className="link">
                                    <span className="text">Question 3?</span>
                                    <span className="chevron">
                                        <svg aria-hidden="true" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </button>
								<div className="panel">
									<div>
										<p>After scheduling a class on our platform, you will be able to join the class
											with 2-4 fellow students from around the world. The teacher will introduce
											themselves and begin teaching the lesson using learning materials that you
											can download at the end of class. During the class, we encourage you to
											interact not only with the materials and the teacher but also with the
											students. Towards the end of class, the teacher will recap the lesson and
											ensure everybody has understood the lesson.</p>
									</div>
								</div>
							</li>
                            <li>
                                <button className="link">
                                    <span className="text">Question 4?</span>
                                    <span className="chevron">
                                        <svg aria-hidden="true" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </button>
								<div className="panel">
									<div>
										<p>After scheduling a class on our platform, you will be able to join the class
											with 2-4 fellow students from around the world. The teacher will introduce
											themselves and begin teaching the lesson using learning materials that you
											can download at the end of class. During the class, we encourage you to
											interact not only with the materials and the teacher but also with the
											students. Towards the end of class, the teacher will recap the lesson and
											ensure everybody has understood the lesson.</p>
									</div>
								</div>
							</li>
						</ul>
						<div className='buttons-row'>
							<a className="link button primary blue" href="#contact">Contact us</a>
							<a className="link button secondary blue" href="faq.html">Read all FAQs</a>
						</div>
					</div>
				</section>
        </>
    )
}
