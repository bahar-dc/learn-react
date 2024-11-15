import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import StickyImage11 from'../Assets/Images/Uploads/about-banner-img.webp';
import BottomImage from'../Assets/Images/Uploads/scroll-image-01.webp';
import { Helmet } from 'react-helmet';
export const About = () => {

    return (
        <>

           <Helmet>
                <title>About - Progresso Learning</title>
                <meta name="description" content="About - Transforming Learning into Lasting Success" />
            </Helmet>

            <Header  />

            <section id="tw-block-hero-home-0" data-view="tw-hero-home" className="hero-home trustpilot trustpilot-inside-hero progresso-flex--first">
                <div className="bg-container">
                    <div className="bg-img bg-img--desktop">
                        <img src={StickyImage11} alt="Banner Desktop" />
                    </div>
                </div>
                <div className="progresso-container single-col">
                    <div className="text-col">
                        <h1>Your Path to Success in Canada Starts Here!</h1>
                        <p className="content"><strong>Progresso Learning Institute</strong> is a premier educational platform dedicated to helping newcomers, students, and professionals thrive in Canada. We offer a comprehensive range of tailored courses, including IELTS, CELPIP, PTE, English Language Training, Confidence Building, Public Speaking, Interview Preparation, and Newcomer Adjustment Programs. Our mission is simple: to provide you with the skills, knowledge, and confidence needed to succeed in any new environment.</p>
                        <a href="/join-our-community" className="link button blue primary">Start Your Journey with Us</a>
                    </div>
                </div>
            </section>

            <section className="text-banner with-centered-text-cta progresso-block">
                <div className="progresso-container">
                    <h2 className="toggle-heading title title--lg-dt">Our <span>Mission</span></h2>
                    <p>Our mission is to deliver accessible, impactful education that enables every student to achieve their goals in Canada and beyond. We strive to create a welcoming and supportive learning community where students not only pass tests but gain the cultural, linguistic, and professional skills needed to thrive.</p>
                </div>
            </section>

            <section id="tw-block-cards-with-image-1" className="cards-with-image style-with-icon">
                <div className="progresso-container title-container">
                    <h2 className="toggle-heading">Why Choose <span>Progresso?</span></h2>
                </div>
                <div className="progresso-container list-container splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide">
                            <article>
                                <div className="article-image">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-1.svg" alt="Logo" className="left-alignment" />
                                </div>
                                <span>Specialized Learning Paths</span>
                                <p>We offer courses tailored to every student’s journey, from test prep to workplace communication.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <div className="article-image">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-2.svg" alt="Logo" className="left-alignment" />
                                </div>
                                <span >Experienced Instructors</span>
                                <p> Our qualified instructors provide real-world insights, exam strategies, and personalized feedback.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                            <div className="article-image">
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-3.svg" alt="Logo" className="left-alignment" />
                            </div>
                            <span > Small Class Sizes</span>
                            <p>Enjoy focused attention with our commitment to small class sizes, ensuring a highly interactive and personalized experience.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                            <div className="article-image">
                                <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-4.svg" alt="Logo" className="left-alignment" />
                            </div>
                            <span >Flexible Learning Options</span>
                            <p>Choose from live online sessions, one-on-one coaching, or group classes to fit your schedule and needs.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                            <div className="article-image">
                                <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-4.svg" alt="Logo" className="left-alignment" />
                            </div>
                            <span >Proven Success Rate</span>
                            <p>With thousands of graduates and a high success rate, our methods are designed to help you achieve results quickly.</p>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="text-banner alt progresso-block">
                <div className="progresso-container text-white light-blue-container">
                    <div>
                        <h2 style={{color:'#ffffff'}} className="title title--lg-dt title--sm-mb">Your Journey Starts Here!</h2>
                        <p>We’re here to make your transition smooth, your learning meaningful, and your success inevitable. Explore our courses, meet our instructors, and join a learning experience designed just for you.</p>
                        <a href="/join" className="button primary white cursor">Enroll Today!</a>
                    </div>
                </div>
            </section>

            <Gallery />

            <section className="img-and-text img-left tablet-row border-rad progresso-block">
                <div className="progresso-container">
                    <div className="text-container" style={{color:'#051f4e'}}>
                        <h2 className="toggle-heading">A World of Opportunities for Every Learner</h2>
                        <div className="content">
                            <p>At Progresso, we envision a world where each individual, regardless of their background, has the opportunity to succeed in their new environment. Through innovative learning methods, personalized support, and a passion for teaching, we aim to be the leading institute for language learning, cultural adjustment, and career readiness.</p>
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="img img--desktop">
                            <img src={BottomImage} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer  />
            
        </>
    )
}
