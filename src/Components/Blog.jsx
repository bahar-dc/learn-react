import React from 'react';
import Scrollimage from'../Assets/Images/Uploads/scroll-image.png';
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Blog = () => {


    return (
        <>

            <Header  />

            <section id="tw-block-hero-home-0" className="hero-home trustpilot trustpilot-inside-hero lingoda-flex--first">
                <div className="bg-container">
                    <div className="bg-img bg-img--desktop">
                        <img src="https://www.lingoda.com/wp-content/uploads/2022/03/hiw-2022-hero-bg-desktop.png" alt="Banner Desktop" />
                    </div>
                </div>
                <div className="lingoda-container single-col">
                    <div className="text-col">
                        <h1>How Lingoda works for you</h1>
                        <p className="content">Read about what happens in a class, how to get started and how Lingoda will help you speak with confidence.</p>
                    </div>
                </div>
            </section>
            <div className="grid-main">
                <nav className="categories-menu">
                    <ul id="menu-en-categories-1" className="menu">
                        <li><a href="/blog/">Blog Home</a></li>
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
                </div>
            </div>
            <Footer  />
            
        </>
    )
}
