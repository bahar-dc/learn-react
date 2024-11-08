import React from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Helmet } from 'react-helmet';
export const NotFound = () => {

    return (
        <>
            <Helmet>
                <title>Error - Progresso Learning</title>
                <meta name="description" content="Error - Progresso Learningpage" />
            </Helmet>

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
