import React from 'react';
import Scrollimage from'../Assets/Images/Uploads/scroll-image.webp';
import BottomImage from'../Assets/Images/Uploads/scroll-image-01.webp';
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Blocks = () => {

    return (
        <>

            <Header  />

            <section id="tw-block-hero-home-0" data-view="tw-hero-home" className="hero-home trustpilot trustpilot-inside-hero progresso-flex--first">
                <div className="bg-container">
                    <div className="bg-img bg-img--desktop">
                        <img src="https://www.lingoda.com/wp-content/uploads/2022/03/hiw-2022-hero-bg-desktop.png" alt="Banner Desktop" />
                    </div>
                </div>
                <div className="progresso-container single-col">
                    <div className="text-col">
                        <h1>How progresso works for you</h1>
                        <p className="content">Read about what happens in a class, how to get started and how progresso will help you speak with confidence.</p>
                    </div>
                </div>
            </section>

            <section className="text-banner with-centered-text-cta progresso-block">
                <div className="progresso-container">
                    <h2 className="toggle-heading title title--lg-dt">90% of students find it easier to complete a course when it is interactive and conducted with the same group</h2>
                </div>
            </section>

            <section className="img-and-text img-left tablet-row border-rad progresso-block">
                <div className="bg" style={{background:'#ffffff'}}></div>
                <div className="progresso-container">
                    <div className="text-container" style={{color:'#051f4e'}}>
                        <h2 className="toggle-heading">Which level can I reach with progresso Teams?</h2>
                        <div className="content">
                            <p>Once you completed all 48 classes of your progresso Teams course, you’ve completed one level. That means that you can for example go from level A1.1 to level A1.2, or from level A2.2 to level B1.1.</p>
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="img img--desktop">
                            <img src={BottomImage} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="tw-block-cards-with-image-1" className="cards-with-image style-with-icon">
                <div className="progresso-container title-container">
                    <h2 className="toggle-heading">What is progresso Teams?</h2>
                </div>
                <div className="progresso-container list-container splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide">
                            <article>
                                <div className="article-image">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-1.svg" alt="Logo" className="left-alignment" />
                                </div>
                                <span>Regular weekly classes</span>
                                <p>48 hours of live classes on Zoom. Complete a level in 2 months with 6 weekly hours or in 3 months with 4 weekly hours.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <div className="article-image">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-2.svg" alt="Logo" className="left-alignment" />
                                </div>
                                <span >Dedicated team and teacher</span>
                                <p >Get support and accountability from learning with the same teacher and classmates. Stay motivated to complete the course with your team.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                            <div className="article-image">
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-3.svg" alt="Logo" className="left-alignment" />
                            </div>
                            <span >Small group classes</span>
                            <p >Learning in a small group of up to 6 students enables you to speak more and to get personalised feedback.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                            <div className="article-image">
                                <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-icon-4.svg" alt="Logo" className="left-alignment" />
                            </div>
                            <span >Exam preparation</span>
                            <p >Unlock new opportunities by passing your language exam. We offer exam preparation courses, ensuring you’re ready to succeed.</p>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>

            <section  className="block-lang-selector border-rad left-align centred-bg progresso-block">
                <div className="progresso-container">
                    <div className="lang-row">
                        <span className="bg" style={{background: 'linear-gradient(to right,#ff33cc -68.92%,#ff971d 119.48%)'}}></span>
                        <div className="text-col" style={{color:'#ffffff'}}>
                            <h2>Ready to join Teams?</h2>
                            <p>Sign up today and achieve a language level in 2 or 3 months</p>
                            <div className="progresso-dropdown-container">
                                <a className="link button primary blue" href='/see-prices'>See prices and schedules</a>
                            </div>
                        </div>
                        <div className="img-col">
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/06/june-2024-teams-lp-explainer-img-d.svg" alt="Explainer" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-banner alt progresso-block">
                <div className="progresso-container">
                    <div style={{background: '#9900CC'}}>
                        <h2 style={{color:'#ffffff'}} className="title title--lg-dt title--sm-mb">Over 100K language learners trust our expert curriculum and award-winning courses</h2>
                    </div>
                </div>
            </section>

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
        
            <section className="video-testimonial-carousel splide four-testimonials-layout progresso-grid is-overflow is-initialized">
                <div className="content">
                    <span className="bg"></span>
                    <div className="progresso-container">
                        <h2 className="toggle-heading">Get inspired by our students' success stories</h2>
                        <p>Hear how our students transformed their first language steps into life-changing moments. Let their stories motivate you to get your own language wins.</p>
                    </div>
                    <div className="progresso-container splide__track">
                        <ul className="splide__list">
                            <li className="splide__slide">
                            <article>
                                <div className="js-lazyload lazyloaded">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/07/Savannah.png" alt="slider" />
                                </div>
                                <div className="outer-container">
                                    <span className="item-title closed">Savannah</span>
                                    <div className="inner-container">
                                        <span className="item-title open">Savannah</span>
                                        <blockquote>Join Savannah as she explores South America and shares how progresso sparked unforgettable Spanish conversations!</blockquote>
                                    </div>
                                </div>
                            </article>
                            </li>
                            <li className="splide__slide">
                            <article>
                                <div className="js-lazyload lazyloaded">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/07/Savannah.png" alt="slider" />
                                </div>
                                <div className="outer-container">
                                    <span className="item-title closed">Kwok</span>
                                    <div className="inner-container">
                                        <span className="item-title open">Kwok</span>
                                        <blockquote>Kwok shares her progresso success: mastering French and making friends through humour and flexible learning!</blockquote>
                                    </div>
                                </div>
                            </article>
                            </li>
                            <li className="splide__slide">
                            <article>
                                <div className="js-lazyload lazyloaded">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/07/Savannah.png" alt="slider" />
                                </div>
                                <div className="outer-container">
                                    <span className="item-title closed">Veronika</span>
                                    <div className="inner-container">
                                        <span className="item-title open">Veronika</span>
                                        <blockquote>See how Veronika turned English lessons into career wins and summer fun with progresso!</blockquote>
                                    </div>
                                </div>
                            </article>
                            </li>
                            <li className="splide__slide">
                            <article>
                                <div className="js-lazyload lazyloaded">
                                    <img src="https://www.lingoda.com/wp-content/uploads/2024/07/Savannah.png" alt="slider" />
                                </div>
                                <div className="outer-container">
                                    <span className="item-title closed">Olivera</span>
                                    <div className="inner-container">
                                        <span className="item-title open">Olivera</span>
                                        <blockquote>From no German to seamless chats: Olivera tells how progresso transformed her language skills in Berlin!</blockquote>
                                    </div>
                                </div>
                            </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div id="image-and-text-2024-3" className="image-and-text-2024 lottie-player progresso-grid" data-view="image-and-text-2024">
                <h2 className="title title--lg-dt progresso-container">Why is progresso Flex right for me?</h2>
                <ul className="progresso-container">
                    <li>
                        <article className="right" style={{color: '#051F4E',background: '#f7ebfb'}}>
                            <div className="content">
                                <h2 className="title title--lg-dt title--sm-mb">You can customise your plan</h2>
                                <p className="text">Adjust your learning schedule and monthly subscription by simply logging into your account and increasing, decreasing, or pausing your subscription.</p>
                                </div>
                            <div className="js-lazyload lazyloaded">
                                <img src="https://www.lingoda.com/wp-content/uploads/2024/02/flex-why-img-1.png" alt="Block 1" />
                            </div>
                        </article>
                    </li>
                    <li>
                        <article className="left" style={{color: '#051F4E',background: '#ECEFFF'}}>
                            <div className="content">
                                <h2 className="title title--lg-dt title--sm-mb">You can learn your way</h2>
                                <p className="text">Enjoy the freedom to organise your classes around your schedule. And we’ll provide the guidance, coaching and support you need to reach your goals on your terms.</p>
                            </div>
                        <div className="js-lazyload lazyloaded">
                                <img src="https://www.lingoda.com/wp-content/uploads/2024/02/flex-why-img-1.png" alt="Block 1" />
                            </div>
                        </article>
                    </li>
                    <li>
                        <article className="right" style={{color: '#051F4E',background: '#f7ebfb'}}>
                            <div className="content">
                                <h2 className="title title--lg-dt title--sm-mb">You’ll learn from the best</h2>
                                <p className="text">Whether you choose our small group classes or 1-1 lessons, our native-level teachers will provide personalised feedback in class and progress reports after class.</p>
                            </div>
                        <div className="js-lazyload lazyloaded">
                                <img src="https://www.lingoda.com/wp-content/uploads/2024/02/flex-why-img-1.png" alt="Block 1" />
                            </div>
                        </article>
                    </li>
                </ul>
            </div>

            <section id="tw-block-cards-with-image-1" data-view="tw-cards-with-image" className="cards-with-image default">
                <div className="progresso-container title-container">
                    <h2 className="toggle-heading">Learning online with progresso</h2>
                </div>
                <div className="progresso-container list-container splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide">
                            <article>
                                <div className="img--desktop-slide">
                                <img src={Scrollimage}  alt="first"/>
                                </div>
                            <h3>Time to practise speaking</h3>
                            <p>Our classes are designed with the student in mind, so you have time to talk and practise your pronunciation.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <div className="img--desktop-slide">
                                <img src={Scrollimage}  alt="Second"/>
                                </div>
                                <h3>Time to practise speaking</h3>
                                <p>Our classes are designed with the student in mind, so you have time to talk and practise your pronunciation.</p>
                            </article>
                        </li>
                        <li className="splide__slide">
                            <article>
                                <div className="img--desktop-slide">
                                <img src={Scrollimage}  alt="Third"/>
                                </div>
                                <h3>Time to practise speaking</h3>
                                <p>Our classes are designed with the student in mind, so you have time to talk and practise your pronunciation.</p>
                            </article>
                        </li>
                    </ul>
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

            <div className="progresso-container youtube-container">
                <h2>See what a progresso class looks like</h2>
                <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/dzl7G7ZIfGg" data-src="https://www.youtube-nocookie.com/embed/dzl7G7ZIfGg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="allowFullScreen"></iframe>
            </div>

            <section id="tw-after-class-2-2-7" data-view="after-class-2-2" className="tw-section tw-block-after-class-2-2 lottie-player medium:tw-pt-32">
                <div className="tw-container-custom">
                    <div className="tw-items-center tw-flex">
                        <div className="tw-w-full tablet:tw-w-2/5 medium:tw-w-1/2 tw-hidden tablet:tw-block md:tw-pr-20">
                            <img src="https://www.lingoda.com/wp-content/uploads/2022/03/hiw-after-class.jpeg" alt='Fourth' className="tw-rounded-2xl webpexpress-processed" />
                        </div>
                        
                        <div className="tw-w-full tablet:tw-w-3/5 medium:tw-w-1/2 tw-px-0">
                            <p className="tw-text-lg tw-inline-block small-text tw-font-normal tw-mb-4">AFTER CLASS</p>
                            <h1 className="tw-text-2xl lg:tw-text-[35px] tw-font-bold tw-mb-4" >Keep learning at any time</h1>
                            <p className="tw-text-base tw-font-normal tw-mb-0">To help you build on everything you’re learning, you have access, any time you want, to lots of great resources.</p>
                            <div className="tw-flex tw-flex-wrap tw-mt-10 lg:tw-mt-14">
                            <div className="tw-flex md:tw-w-1/2 tw-items-center tw-px-0 tw-mb-6 medium:tw-mb-12">
                                <div className="cards-left-part">
                                    
                                </div>
                                <div className="cards-right-part tw-pl-5 md:tw-pr-5">
                                    <div className="info-content">Recap classes to help test your knowledge</div>
                                </div>
                            </div>
                            <div className="tw-flex md:tw-w-1/2 tw-items-center tw-px-0 tw-mb-6 medium:tw-mb-12">
                                <div className="cards-left-part">
                                    
                                </div>
                                <div className="cards-right-part tw-pl-5 md:tw-pr-5">
                                    <div className="info-content">Annotated PDFs from all your teachers</div>
                                </div>
                            </div>
                            <div className="tw-flex md:tw-w-1/2 tw-items-center tw-px-0 tw-mb-6 medium:tw-mb-12">
                                <div className="cards-left-part">
                                    
                                </div>
                                <div className="cards-right-part tw-pl-5 md:tw-pr-5">
                                    <div className="info-content">Homework for each lesson and a self-study area</div>
                                </div>
                            </div>
                            <div className="tw-flex md:tw-w-1/2 tw-items-center tw-px-0 tw-mb-6 medium:tw-mb-12">
                                <div className="cards-left-part">
                                
                                </div>
                                <div className="cards-right-part tw-pl-5 md:tw-pr-5">
                                    <div className="info-content">Blog filled with additional resources and tips</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="block-goals-2-2-8" data-view="goals-2-2" className="block lottie-player block-goals-2-2">
                <div className="container container-custom">
                    <div className="row align-items-center">
                        <div className="col-lg-6 content-wrapper px-0">
                            <p className="block-sm-font d-inline-block small-text font-w400 px-4">SET GOALS</p>
                            <h1 className="hero-title-2-0 font-w700 mb-3 px-4">Hard work pays off <br /> with progresso</h1>
                            <p className="block-body-font font-w400 mb-0 px-4">Whether you’re looking for a high-frequency course to learn faster or are <br /> committed to a long term goal of fluency, with our selection of courses, you <br /> can choose how often and how quickly you want to learn.</p>
                        </div>
                        <div className="col-lg-6 image-wrapper mt-4 mt-lg-0">
                        <img src={Scrollimage} alt="Scroll " />
                        </div>
                    </div>
                </div>
            </section>

            <Footer  />
            
        </>
    )
}
