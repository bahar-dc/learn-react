import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import CourseImage2 from'../Assets/Images/Uploads/services-img-02.webp';
import BottomImage from'../Assets/Images/Uploads/scroll-image-01.webp';
import { Helmet } from 'react-helmet';

// import Interview1 from'../Assets/Images/Uploads/confidence-1.jpg';
// import Interview2 from'../Assets/Images/Uploads/confidence-2.jpg';
// import Interview3 from'../Assets/Images/Uploads/confidence-3.jpg';
// import Interview4 from'../Assets/Images/Uploads/confidence-4.jpg';
// import Interview5 from'../Assets/Images/Uploads/confidence-5.jpg';
// import Interview6 from'../Assets/Images/Uploads/confidence-6.jpg';
// import Interview7 from'../Assets/Images/Uploads/confidence-7.jpg';
// import Interview8 from'../Assets/Images/Uploads/confidence-8.jpg';
// import Interview9 from'../Assets/Images/Uploads/confidence-9.jpg';
// import Interview10 from'../Assets/Images/Uploads/confidence-10.jpg';
// import Interview11 from'../Assets/Images/Uploads/confidence-11.JPG';
// import Interview12 from'../Assets/Images/Uploads/confidence-12.jpg';
// import Interview13 from'../Assets/Images/Uploads/confidence-13.jpg';
// import Interview14 from'../Assets/Images/Uploads/confidence-14.jpg';
// import Interview15 from'../Assets/Images/Uploads/confidence-15.jpg';


export const ConfidenceAndPublicSpeaking = () => {

    return (
        <>

             <Helmet>
                <title>Confidence & Public Speaking - Progresso Learning</title>
                <meta name="description" content="Confidence & Public Speaking - Transforming Learning into Lasting Success" />
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
                        <h1>Build Confidence & Master Public Speaking</h1>
                    </div>
                </div>
            </section>

            <section className="text-banner with-centered-text-cta progresso-block">
                <div className="progresso-container">
                    <h2 className="toggle-heading title title--lg-dt">Overview</h2>
                    <p>Public speaking and confidence are integral to professional success. This course is crafted to enhance students’ presentation skills, instill confidence, and empower effective communication for any audience.</p>
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
                                <p>Basics of self-confidence building, body language, voice modulation, and constructing a compelling speech.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <div className="article-image">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-2.svg" alt="Logo" className="left-alignment" />
                                </div>
                                <span >12 Classes:</span>
                                <p>Advanced techniques in speech delivery, handling nerves, audience engagement, and the essentials of persuasive speaking.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                            <div className="article-image">
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-3.svg" alt="Logo" className="left-alignment" />
                            </div>
                            <span > 20 Classes:</span>
                            <p>Comprehensive training on various presentation styles, debate skills, storytelling, and real-world simulation for different settings.</p>
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
                                <p>Real-time feedback from expert instructors with personalized improvement plans.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <p>Role-play exercises and live feedback in every class to simulate real-life speaking scenarios.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                           <p>Dedicated sessions for building resilience and overcoming public-speaking anxiety.</p>
                            </article>
                        </li>
                    </ul>
                </div>
                <div className="progresso-container">
                      <div className="space-80"></div>
                    <h3>Why Confidence & Public Speaking Are Important:</h3>
                   <p> Public speaking is not only a critical skill in professional and academic settings but also essential for personal development. Progresso’s training helps individuals articulate their ideas clearly, engage effectively with others, and approach opportunities with confidence.</p>
                </div>
            </section>

             {/* <div className="gallery">
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
                <div className="gallery-item"><img src={Interview14} alt="Gallery 6" /></div>
                <div className="gallery-item"><img src={Interview15} alt="Gallery 6" /></div>
            </div> */}

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
