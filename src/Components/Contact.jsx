import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";


export const Contact = () => {

    	

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
                        <h1>Contact</h1>
                        {/* <p className="content">Read about what happens in a class, how to get started and how progresso will help you speak with confidence.</p> */}
                    </div>
                </div>
            </section>

            <section className='progresso-container contact-us-page'>
                <div className="site-container flex-row">
                    <div className="contact-us-left">
                        <h2>Any questions? Send us a message</h2>
                        <p>We would be happy to assist you! If you decided to learn with a tutor, please fill out a form and a member of our team will get in touch with <br /> you within 48 hours. Thanks for trusting us with your test prep needs.</p>
                        <p><a href="tel:(416) 670-4415">(416) 670-4415</a> <br /></p>
                        <p>400 Applewood Cres. Suite 100 Vaughan, ON L4K OC3 <br /></p>
                        <p><a href="mailto:hello@progresso.com">hello@progresso.com</a></p>
                    </div>
                    <div className="contact-us-right">
                        <div className="contact-form">
                            <h2>Contact Us</h2>
                            <form>
                                <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                                </div>

                                <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required></textarea>
                                </div>

                            <div className="form-group">
                                <input type="submit" value="Send Message" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer  />
            
        </>
    )
}
