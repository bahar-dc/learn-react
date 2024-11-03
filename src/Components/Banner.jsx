import bannerImage from'../Assets/Images/Uploads/hero-section-banner.png';

export const Banner = () => {
    return (
        <>
            <section  className="hero bottom-tablet-image trustpilot style-homepage-revamp progresso-grid--first">
                <div className="site-container">
                    <div className="content-container">
                        <h1>Welcome to Progresso Learning Institute – Your Global Partner in <strong>Success</strong></h1>
                        <p className='description'>
                            Unlock Your Potential in Canada and Beyond! Master English with our customized online courses in CELPIP, IELTS, Business English, and Confidence Building. Whether you’re aiming for fluency, career success, or cultural confidence, we’ll help you communicate powerfully and thrive in any setting!
                        </p>
                        <a href="/cources" className="link button blue primary">Explore Our Courses</a>
                    </div>
                    <div className="image-container">
                        <div>
                           <img src={bannerImage}  alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}