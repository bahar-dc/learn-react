import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
// import $ from "jquery";
// import { useEffect } from 'react';

export const Pricing = () => {

    	// useEffect(() => {
        //     const handleAccordionClick = function() {
        //     if ($(this).hasClass('active')) {
        //         $(this).removeClass('active');
        //         $(this).closest('li').removeClass('active');
        //         $(this).siblings('.panel').slideUp(300);
        //     } else {
        //         $('li button.link').removeClass('active');
        //         $('li').removeClass('active');
        //         $('.panel').slideUp(300);
        //         $(this).closest('li').addClass('active');
        //         $(this).addClass('active');
        //         $(this).siblings('.panel').slideDown(300);
        //     }
        //     };
        
        //     if ($('.accordion-with-animation').length > 0) {
        //     $('li button.link').on('click', handleAccordionClick);
        //     }
        
        //     // Cleanup function to remove the event listener when component unmounts
        //     return () => {
        //     $('li button.link').off('click', handleAccordionClick);
        //     };
        // }, []);

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
                        <h1>Achieve your language goal together with a dedicated team</h1>
                        <ul className="checkmark-list">
                            <li>
                                <span>Live classes with personalised feedback</span>
                            </li>
                            <li>
                                <span>Smallest group classes on the market</span>
                            </li>
                            <li>
                                <span>Interact and connect with your team and teacher</span>
                            </li>
                        </ul>
                        <div className="btn-wrapper"><a className="link button blue primary" href="/see-prices">See prices and schedules</a></div>
                    </div>
                </div>
            </section>

           <section id="courses" className="courses-cards progresso-block">
            <div className="progresso-container">
                <h2 className="toggle-heading title title--lg-dt">What courses does progresso offer?</h2>
                <ul className="cards cards--3">
                    <li>
                        <article>
                        <div>
                            <div className="card-title title title--sm-mb">Sprint</div>
                        </div>
                        <p className="text">1-month challenge with big rewards – for learners who want extra motivation.</p>
                        <ul>
                            <li>
                              
                                <span className="text">Earn 50 % cashback or more in class credits</span></li>
                            <li>
                              
                                <span className="text">Group classes with 3–5 students</span></li>
                            <li>
                              
                                <span className="text">2 Intensities - 4 or 6 lessons per week</span></li>
                        </ul>
                        <a href="https://www.lingoda.com/en/sprint/" className="link button secondary blue">Learn more</a>
                        </article>
                    </li>
                    <li>
                        <article className="gradient">
                        <div>
                            <div className="card-title title title--sm-mb">Flex</div>
                        </div>
                        <p className="text">Build your own language journey – for learners who want more flexibility.</p>
                        <ul>
                            <li>
                               
                                <span className="text">Learn anytime – at your pace</span></li>
                            <li>
                               
                                <span className="text">Cancel or change intensity every 4 weeks</span></li>
                            <li>
                               
                                <span className="text">Group or 1-on-1 private classes</span></li>
                        </ul>
                        <a href="https://www.lingoda.com/en/flex/" className="link button primary white">Learn more</a>
                        </article>
                    </li>
                    <li>
                        <article>
                        <div>
                            <div className="card-title title title--sm-mb">Teams</div>
                        </div>
                        <p className="text">Pre-booked classes with a dedicated team – for learners who want structure and support.</p>
                        <ul>
                            <li>
                              
                                <span className="text">Fixed classmates and teachers</span></li>
                            <li>
                              
                                <span className="text">2 intensities: 4 or 6 classes per week</span></li>
                            <li>
                              
                                <span className="text">48 group classes in 8 or 12 weeks</span></li>
                        </ul>
                        <a href="https://www.lingoda.com/en/teams/" className="link button secondary blue">Learn more</a>
                        </article>
                    </li>
                </ul>
            </div>
            </section>


            <section className="text-banner alt progresso-block">
                <div className="progresso-container">
                    <div style={{background: '#3498db'}}>
                        <h2 style={{color:'#ffffff'}} className="title title--lg-dt title--sm-mb">Over 100K language learners trust our expert curriculum and award-winning courses</h2>
                    </div>
                </div>
            </section>


            <section className="accordion">
                <div className="progresso-container">
                    <h2 className="toggle-heading">Frequently asked questions</h2>
                    <div className="content">
                        <div>
                            <ul>
                            <li>
                                <button className="link">
                                    <h2>What learning materials will I get?</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p>As a progresso student, you can download the class materials for free and use them at any time. After your class, you will also find a quiz to help you refresh and practice your new skills. For English and A1 German students, downloadable exercises are available as well. All materials are uniquely created by progresso experts to align with CEFR standards. If you want to learn more about CEFR, view <a href="https://www.linguando.com/en/cefr/">here</a>.</p>
                                </div>
                            </li>
                            <li>
                                <button className="link" >
                                    <h2>Concretely, what happens in a class?</h2>
                                    <svg aria-hidden="true" className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 18.5 11">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" d="M15.75,0.75l-7.5,7.5l-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className='panel'>
                                    <p>After scheduling a class on our platform, you will be able to join the class with 2-4 fellow students from around the world. The teacher will introduce themselves and begin teaching the lesson using learning materials that you can download at the end of class. During the class, we encourage you to interact not only with the materials and the teacher but also with the students. Towards the end of class, the teacher will recap the lesson and ensure everybody has understood the lesson.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="buttons-row">
                            <a className="link button primary blue" href="/contact">Contact us</a>
                            <a className="link button secondary blue first" href="/faq">Read all FAQs</a>
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
