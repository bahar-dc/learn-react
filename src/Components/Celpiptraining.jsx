import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import CourseImage2 from'../Assets/Images/Uploads/learn-03.webp';
import { Helmet } from 'react-helmet';


export const Celpiptraining = () => {

    return (
        <>

            <Helmet>
                <title>CELPIP Training - Progresso Learning</title>
                <meta name="description" content="CELPIP Training - Progresso Learning" />
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
                        <h1>Master the CELPIP for Canadian Success!</h1>
                    </div>
                </div>
            </section>

            <section className="text-banner with-centered-text-cta progresso-block">
                <div className="progresso-container">
                    <h2 className="toggle-heading title title--lg-dt">Overview</h2>
                    <p>This program is designed to help students achieve top scores in the CELPIP exam, crucial for Canadian immigration and job opportunities. Lessons focus on refining the four CELPIP skills (Listening, Reading, Writing, Speaking) through real-life scenarios and Canadian contexts.</p>
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
                                <p>Students will gain an understanding of CELPIP basics, beginning with skill-building for each module (listening comprehension, reading fluency, writing basics, and spoken responses).</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <div className="article-image">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-2.svg" alt="Logo" className="left-alignment" />
                                </div>
                                <span >12 Classes:</span>
                                <p> Our qualified instructors provide real-world insights, exam strategies, and personalized feedback.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                            <div className="article-image">
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-3.svg" alt="Logo" className="left-alignment" />
                            </div>
                            <span > 20 Classes:</span>
                            <p>Enjoy focused attention with our commitment to small class sizes, ensuring a highly interactive and personalized experience.</p>
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
                                <p>Full-length mock exams with detailed feedback for self-assessment.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <p>Customized improvement plans and personalized score-building strategies.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                           <p>Flexible scheduling options with 1:1 or buddy sessions for focused learning.</p>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="text-banner alt progresso-block">
                <div className="progresso-container text-white light-blue-container">
                    <div>
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
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/06/teams-pricing-graph-d.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer  />
            
        </>
    )
}
