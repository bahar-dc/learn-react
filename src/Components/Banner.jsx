import bannerImage from'../Assets/Images/Uploads/hero-section-banner.png';

export const Banner = () => {
    return (
        <>
            <section  className="hero bottom-tablet-image trustpilot style-homepage-revamp lingoda-grid--first">
                <div className="site-container">
                    <div className="content-container">
                        <h1>Welcome to Progresso Learning Institute – Your Global Partner in Success</h1>
                        <p className='description'>
                            Empowering you to excel in Canada and beyond through customized courses in English proficiency, confidence building, public speaking, and cultural adaptation.
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