import React from 'react';
import { Header } from "./Header";
import { Learning } from "./Learning";
import { Footer } from "./Footer";
import bannerimage from'../Assets/Images/Uploads/about-banner-img.webp';
import { Helmet } from 'react-helmet';


export const Courses = () => {

    return (
        <>

            <Helmet>
                <title>Courses - Progresso Learning</title>
                <meta name="description" content="Courses - Transforming Learning into Lasting Success" />
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
                        <h1>Your Path to Success in Canada Starts Here!</h1>
                        <p className="content"><strong>Progresso Learning Institute</strong> is a premier educational platform dedicated to helping newcomers, students, and professionals thrive in Canada. We offer a comprehensive range of tailored courses, including IELTS, CELPIP, PTE, English Language Training, Confidence Building, Public Speaking, Interview Preparation, and Newcomer Adjustment Programs. Our mission is simple: to provide you with the skills, knowledge, and confidence needed to succeed in any new environment.</p>
                        <a href="/join-our-community" className="link button blue primary">Start Your Journey with Us</a>
                    </div>
                </div>
            </section>

           <Learning />
          
    

            <Footer  />
            
        </>
    )
}
