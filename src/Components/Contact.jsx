import React from 'react';
import { Header } from "./Header";
import { Faqs } from "./Faqs";
import { Footer } from "./Footer";
import { ContactForm } from "./ContactForm";
import bannerimage from'../Assets/Images/Uploads/learn-08.webp';
import { Helmet } from 'react-helmet';



export const Contact = () => {

    return (
        <>

            <Helmet>
                <title>Conatact - Progresso Learning</title>
                <meta name="description" content="Conatact - Transforming Learning into Lasting Success" />
            </Helmet>

            <Header  />

            <section id="tw-block-hero-home-0" data-view="tw-hero-home" className="hero-home trustpilot trustpilot-inside-hero progresso-flex--first">
                <div className="bg-container">
                    <div className="bg-img bg-img--desktop">
                        <img src={bannerimage} alt="Banner Desktop" />
                    </div>
                </div>
                <div className="progresso-container single-col">
                    <div className="text-col">
                        <h1>Get in Touch with Progresso Learning Institute</h1>
                        <p className="content">We’re here to answer your questions, guide you on your learning journey, and help you achieve your goals. Reach out to us today to start your path to success!</p>
                    </div>
                </div>
            </section>

            <section className='progresso-container contact-us-page'>
                <div className="site-container flex-row">
                    <div className="contact-us-left">
                        <h2>Contact Information</h2>
                        <p>We would be happy to assist you! If you decided to learn with a tutor, please fill out a form and a member of our team will get in touch with  you within 48 hours. Thanks for trusting us with your test prep needs.</p>
                        <p>
                            <svg className="w-[36px] h-[36px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                            </svg>  Peterborough, ON <br />
                        </p>
                        <p>
                            <a href="tel:+17058758152">
                                <svg className="w-[36px] h-[36px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                                </svg>  +1 705-875-8152</a> <br /></p>
                        <p>
                            <a href="mailto:hello@progressolearning.ca">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24">
                                    <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"/>
                                </svg>hello@progressolearning.ca</a></p>

                        <h3>Office Hours</h3>

                        <p> Monday - Friday: 9:00 AM - 6:00 PM <br />
                            Saturday: 10:00 AM - 3:00 PM <br />
                            Sunday: Closed <br /></p>
                    </div>
                    <div className="contact-us-right">
                       <div className="contact-form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

        

             <Faqs />

            <Footer  />
            
        </>
    )
}
