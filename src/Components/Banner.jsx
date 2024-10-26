import bannerImage from'../Assets/Images/Uploads/Herohomeimage.webp';

export const Banner = () => {
    return (
        <>
            <section  className="hero bottom-tablet-image trustpilot style-homepage-revamp lingoda-grid--first">
                <div className="site-container">
                    <div className="content-container">
                        <h1>Unlock Your Future with Expert <span>Language & Communication</span> Training</h1>
                        <p className='description'>
                            Prepare for IELTS, CELPIP, PTE, and Enhance Your English Language Skills for Immigration and Career Success.
                        </p>
                        <a href="/cources" className="link button blue primary">View Courses</a>
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