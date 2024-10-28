import React from 'react';
import Scrollimage from'../Assets/Images/Uploads/scroll-image.png';
import { Header } from "./Header";
import { Footer } from "./Footer";

export const About = () => {


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

            <section className="text-banner alt progresso-block">
                <div className="progresso-container">
                    <div style={{background: '#9900CC'}}>
                        <h2 style={{color:'#ffffff'}} className="title title--lg-dt title--sm-mb">Over 100K language learners trust our expert curriculum and award-winning courses</h2>
                    </div>
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
                            <img src="https://www.lingoda.com/wp-content/uploads/2024/06/teams-pricing-graph-d.png" alt="" />
                        </div>
                    </div>
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


            <Footer  />
            
        </>
    )
}
