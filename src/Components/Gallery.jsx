import React from 'react';
import { Helmet } from 'react-helmet';
import StickyImage11 from'../Assets/Images/Uploads/about-banner-img.webp';



export const Gallery = () => {

    return (
        <>

            <Helmet>
                <title>Courses - Progresso Learning</title>
                <meta name="description" content="Courses - Transforming Learning into Lasting Success" />
            </Helmet>


                <div className="gallery">
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 1" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 2" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 3" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 4" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 5" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                    <div className="gallery-item"><img src={StickyImage11} alt="Gallery 6" /></div>
                </div>
            
        </>
    )
}
