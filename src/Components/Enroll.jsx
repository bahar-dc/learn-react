import React from 'react';
import { Header } from "./Header";
import { Faqs } from "./Faqs";
import { Footer } from "./Footer";
import bannerimage from'../Assets/Images/Uploads/progresso-image-02-min.jpg';
import { Helmet } from 'react-helmet';
import { RegistrationForm } from "./RegistrationForm";
export const Enroll = () => {

    return (
        <>

            <Helmet>
                <title>Enroll - Progresso Learning</title>
                <meta name="description" content="Enroll - Transforming Learning into Lasting Success" />
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
                     <RegistrationForm />
                </div>
            </section>

             <Faqs />

            <Footer  />
            
        </>
    )
}
