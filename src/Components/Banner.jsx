import bannerImage from'../Assets/Images/Uploads/Herohomeimage.webp';

export const Banner = () => {
    return (
        <>
            <section  className="hero bottom-tablet-image trustpilot style-homepage-revamp lingoda-grid--first">
                <div className="site-container">
                    <div className="content-container">
                        <h1>Online language learning <span>made for you</span></h1>
                        <a className="link button blue primary" href="get-started.html">Start for free</a>
                    </div>

                    <div className="image-container">
                        <div>
                           <img src={bannerImage} alt="Banner image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}