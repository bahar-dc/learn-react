import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from "./Header";
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
            <MCQs />
            <Footer  />            
        </>
    )
}
