import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from "./Header";
import StickyImage11 from'../Assets/Images/Uploads/about-banner-img.webp';
import { Footer } from "./Footer";
import { MCQs } from "./MCQs";

export const TestYourEnglish = () => {

    return (
        <>
            <Helmet>
                <title>Test Your English - Transforming Learning into Lasting Success</title>
                <meta name="description" content="Conatact - Transforming Learning into Lasting Success" />
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
                        <h1>Test Your English Skills – Get a Free Assessment Today!</h1>
                        <p>
                            Curious about your English proficiency? Take our free English skills test to understand your strengths and areas for improvement. Submit the quick assessment form, and our team will review your results and provide personalized feedback on your language level. Whether you're preparing for an exam or just looking to boost your confidence, Progresso Learning will guide you every step of the way. Start your journey toward fluency with us today!

                        </p>

                        <a href="#/#englishtest" className="link button blue primary">Submit Your Free English Test</a>
                    </div>
                </div>
            </section>
            <div className="site-container">
                <br />
                <br />
                <br />
            </div>

            <div className="site-container" id="englishtest">
                <MCQs />
            </div>
            <Footer  />            
        </>
    )
}

