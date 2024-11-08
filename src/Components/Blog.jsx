import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import bannerimage from '../Assets/Images/Uploads/pricing-banner.webp'
import { Helmet } from 'react-helmet';


export const Blog = () => {


    return (
        <>

            <Helmet>
                <title>Blog - Progresso Learning</title>
                <meta name="description" content="Blog - Progresso Learning" />
            </Helmet>
            <Header  />

            <section className="hero-home trustpilot trustpilot-inside-hero progresso-flex--first">
                <div className="bg-container">
                    <div className="bg-img bg-img--desktop">
                        <img src={bannerimage} alt="Banner Desktop" />
                    </div>
                </div>
                <div className="progresso-container single-col">
                    <div className="text-col">
                        <h1>How progresso works for you</h1>
                        <p className="content">Read about what happens in a class, how to get started and how progresso will help you speak with confidence.</p>
                    </div>
                </div>
            </section>
            <div className="blog-ctn">
                <div className="grid-main">
                    <nav className="categories-menu">
                        <ul id="menu-en-categories-1" className="menu">
                            <li><a href="/blog-one">Blog One</a></li>
                            <li><a href="/blog-two">Blog Two</a></li>
                            <li><a href="/blog-three">Blog Three</a></li>
                            <li><a href="/blog-four">Blog Four</a></li>
                            <li><a href="/blog-five">Blog Five</a></li>
                        <li className="menu-item-has-children">
                                <span>Spanish resources</span>
                                <span className="arrow down"></span>
                                <ul className="sub-menu">
                                    <li><a href="/">Learning materials</a></li>
                                    <li><a href="/">Career</a></li>
                                    <li><a href="/">Culture</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="grid-container">
                        <div className="grid-item">
                            <img src="https://www.lingoda.com/blog/wp-content/uploads/2024/09/best-online-french-classes-768x399.jpg" alt="Text" />
                            <div className="grid-item-content">
                                <h2><a href="https://www.lingoda.com/blog/en/best-online-french-classes/">The 10 best online French courses in 2024</a></h2>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src="https://www.lingoda.com/blog/wp-content/uploads/2024/09/best-online-french-classes-768x399.jpg" alt="Text" />
                            <div className="grid-item-content">
                                <h2><a href="https://www.lingoda.com/blog/en/best-online-french-classes/">The 10 best online French courses in 2024</a></h2>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src="https://www.lingoda.com/blog/wp-content/uploads/2024/09/best-online-french-classes-768x399.jpg" alt="Text" />
                            <div className="grid-item-content">
                                <h2><a href="https://www.lingoda.com/blog/en/best-online-french-classes/">The 10 best online French courses in 2024</a></h2>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src="https://www.lingoda.com/blog/wp-content/uploads/2024/09/best-online-french-classes-768x399.jpg" alt="Text" />
                            <div className="grid-item-content">
                                <h2><a href="https://www.lingoda.com/blog/en/best-online-french-classes/">The 10 best online French courses in 2024</a></h2>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src="https://www.lingoda.com/blog/wp-content/uploads/2024/09/best-online-french-classes-768x399.jpg" alt="Text" />
                            <div className="grid-item-content">
                                <h2><a href="https://www.lingoda.com/blog/en/best-online-french-classes/">The 10 best online French courses in 2024</a></h2>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src="https://www.lingoda.com/blog/wp-content/uploads/2024/09/best-online-french-classes-768x399.jpg" alt="Text" />
                            <div className="grid-item-content">
                                <h2><a href="https://www.lingoda.com/blog/en/best-online-french-classes/">The 10 best online French courses in 2024</a></h2>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src="https://www.lingoda.com/blog/wp-content/uploads/2024/09/best-online-french-classes-768x399.jpg" alt="Text" />
                            <div className="grid-item-content">
                                <h2><a href="https://www.lingoda.com/blog/en/best-online-french-classes/">The 10 best online French courses in 2024</a></h2>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src="https://www.lingoda.com/blog/wp-content/uploads/2024/09/best-online-french-classes-768x399.jpg" alt="Text" />
                            <div className="grid-item-content">
                                <h2><a href="https://www.lingoda.com/blog/en/best-online-french-classes/">The 10 best online French courses in 2024</a></h2>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src="https://www.lingoda.com/blog/wp-content/uploads/2024/09/best-online-french-classes-768x399.jpg" alt="Text" />
                            <div className="grid-item-content">
                                <h2><a href="https://www.lingoda.com/blog/en/best-online-french-classes/">The 10 best online French courses in 2024</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer  />
            
        </>
    )
}
