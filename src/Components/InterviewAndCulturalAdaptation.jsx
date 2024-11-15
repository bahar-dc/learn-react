import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import CourseImage2 from'../Assets/Images/Uploads/services-img-03.webp';
import BottomImage from'../Assets/Images/Uploads/scroll-image-01.webp';
import { Helmet } from 'react-helmet';
import Interview1 from'../Assets/Images/Uploads/interview-01.jpeg';
import Interview2 from'../Assets/Images/Uploads/interview-02.jpeg';
import Interview3 from'../Assets/Images/Uploads/interview-03.jpeg';
import Interview4 from'../Assets/Images/Uploads/interview-04.jpeg';
import Interview5 from'../Assets/Images/Uploads/interview-05.jpeg';
import Interview6 from'../Assets/Images/Uploads/interview-06.jpeg';
import Interview7 from'../Assets/Images/Uploads/interview-07.jpg';
import Interview8 from'../Assets/Images/Uploads/interview-08.jpg';
import Interview9 from'../Assets/Images/Uploads/interview-09.jpg';
import Interview10 from'../Assets/Images/Uploads/interview-10.jpg';
import Interview11 from'../Assets/Images/Uploads/interview-11.JPG';
import Interview12 from'../Assets/Images/Uploads/interview-12.jpg';
import Interview13 from'../Assets/Images/Uploads/interview-13.jpg';

export const InterviewAndCulturalAdaptation = () => {

    return (
        <>

             <Helmet>
                <title>Interview & Cultural Adaptation - Transforming Learning into Lasting Success</title>
                <meta name="description" content="Interview & Cultural Adaptation - Progresso Learning" />
            </Helmet>

            <Header  />

            <section id="tw-block-hero-home-0" data-view="tw-hero-home" className="hero-home trustpilot trustpilot-inside-hero progresso-flex--first">
                <div className="bg-container">
                    <div className="bg-img bg-img--desktop">
                        <img src={CourseImage2} alt="Banner Desktop" />
                    </div>
                </div>
                <div className="progresso-container single-col">
                    <div className="text-col">
                        <h1>Flourish Abroad with Everyday English</h1>
                    </div>
                </div>
            </section>

            <section className="text-banner with-centered-text-cta progresso-block">
                <div className="progresso-container">
                    <h2 className="toggle-heading title title--lg-dt">Overview</h2>
                    <p>This course offers a unique blend of English language fluency, interview skills, and cultural understanding, ideal for newcomers to Canada. The focus is on conversational English, workplace expectations, and the nuances of Canadian culture.</p>
                </div>
            </section>

            <section id="tw-block-cards-with-image-1" className="cards-with-image style-with-icon">
                <div className="progresso-container title-container">
                    <h2 className="toggle-heading">What Students Will Learn:</h2>
                </div>
                <div className="progresso-container list-container splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide">
                            <article>
                                <div className="article-image">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-1.svg" alt="Logo" className="left-alignment" />
                                </div>
                                <span>8 Classes:</span>
                                <p>Basics of conversational English, understanding Canadian etiquette, and an introduction to interview dynamics.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <div className="article-image">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-2.svg" alt="Logo" className="left-alignment" />
                                </div>
                                <span >12 Classes:</span>
                                <p>In-depth exploration of Canadian workplace culture, practical interview preparation, and vocabulary for professional and social settings.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                            <div className="article-image">
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-3.svg" alt="Logo" className="left-alignment" />
                            </div>
                            <span > 20 Classes:</span>
                            <p>Mastery in conversational fluency, nuanced social interactions, handling complex interview questions, and deep cultural understanding for smooth integration.</p>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="tw-block-cards-with-image-1" className="cards-with-image style-with-icon">
                <div className="progresso-container title-container">
                    <h2 className="toggle-heading">Unique Offerings by Progresso:</h2>
                </div>
                <div className="progresso-container list-container splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide">
                            <article>
                                <p>Practical, scenario-based learning to prepare students for real-world interactions..</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <p>Individualized sessions to address cultural challenges and workplace etiquette.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                           <p>Focused support for career building, from job interview strategies to socializing in professional contexts.</p>
                            </article>
                        </li>
                    </ul>
                </div>
                <div className="progresso-container">
                    <div className="space-80"></div>
                    <h3> Why Everyday English & Cultural Adaptation Are Important:</h3>
                    <p>Adjusting to a new culture and language can be challenging, especially in a professional setting. This course not only improves English fluency but also teaches the social and cultural norms essential for career growth and personal well-being in Canada. Students gain confidence in everyday interactions, ensuring they thrive in both their personal and professional lives.</p>
                </div>
            </section>

            <div className="gallery">
                <div className="gallery-item"><img src={Interview1} alt="Gallery 1" /></div>
                <div className="gallery-item"><img src={Interview2} alt="Gallery 2" /></div>
                <div className="gallery-item"><img src={Interview3} alt="Gallery 3" /></div>
                <div className="gallery-item"><img src={Interview4} alt="Gallery 4" /></div>
                <div className="gallery-item"><img src={Interview5} alt="Gallery 5" /></div>
                <div className="gallery-item"><img src={Interview6} alt="Gallery 6" /></div>
                <div className="gallery-item"><img src={Interview7} alt="Gallery 6" /></div>
                <div className="gallery-item"><img src={Interview8} alt="Gallery 6" /></div>
                <div className="gallery-item"><img src={Interview9} alt="Gallery 6" /></div>
                <div className="gallery-item"><img src={Interview10} alt="Gallery 6" /></div>
                <div className="gallery-item"><img src={Interview11} alt="Gallery 6" /></div>
                <div className="gallery-item"><img src={Interview12} alt="Gallery 6" /></div>
                <div className="gallery-item"><img src={Interview13} alt="Gallery 6" /></div>
            </div>

            <section className="text-banner alt progresso-block">
                <div className="progresso-container text-white light-blue-container">
                    <div>
                        <h2 className='color-white'>Enroll Now for Immediate Access</h2>
                        <a href="#/enroll" className="button primary white cursor">Enroll Today!</a>
                    </div>
                </div>
            </section>

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
