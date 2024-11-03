import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";

export const NotFound = () => {

    return (
        <>

            <Header  />

         

            <section className="text-banner with-centered-text-cta progresso-block error-page">
                <div className="progresso-container">
                    <h2 className="toggle-heading title title--lg-dt">404 Page</h2>
                    <p>Page Not Found</p>
                    <div className="not-found-btn">
                        <a href="/" className='button primary'>Go back to Home</a>
                    </div>
                </div>
            </section>

            <Footer  />
            
        </>
    )
}
