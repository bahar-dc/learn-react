import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import CourseImage2 from'../Assets/Images/Uploads/services-img-01.webp';
import { Helmet } from 'react-helmet';

export const EnglishLanguageCourses = () => {

    return (
        <>
             <Helmet>
                <title>English Language Course - Progresso Learning</title>
                <meta name="description" content="English Language Course - Progresso Learning" />
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
                        <h1>Learn English to Excel in Canada and Beyond</h1>
                    </div>
                </div>
            </section>

            <section className="text-banner with-centered-text-cta progresso-block">
                <div className="progresso-container">
                    <h2 className="toggle-heading title title--lg-dt">Overview</h2>
                    <p>Progresso’s English Language course is designed to build a strong foundation for non-native speakers, covering grammar, vocabulary, conversation, and writing skills to empower students in all facets of English.</p>
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
                                <p>Grammar basics, vocabulary building, introduction to everyday conversation.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <div className="article-image">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-2.svg" alt="Logo" className="left-alignment" />
                                </div>
                                <span >12 Classes:</span>
                                <p>Structured exercises to improve fluency, sentence structure, and contextual vocabulary.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                            <div className="article-image">
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-3.svg" alt="Logo" className="left-alignment" />
                            </div>
                            <span > 20 Classes:</span>
                            <p>Mastery of grammar, vocabulary, and pronunciation for confident, effective communication.</p>
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
                                <p>Customized learning path based on students’ skill level.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <p>Engaging, real-life language applications in a supportive environment.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                           <p>Access to resources and practice material, including conversational practice for everyday scenarios.</p>
                            </article>
                        </li>
                    </ul>
                </div>
                <div className="progresso-container">
                    <div className="space-80"></div>
                    <h3>Why English Language Skills Are Important</h3>
                    <p>Strong English skills are essential for thriving in English-speaking environments, especially for students, professionals, and newcomers. This course builds foundational proficiency, enabling students to express themselves with confidence, connect with others meaningfully, and pursue broader educational and career opportunities.</p>
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
