import Scrollimage from'../Assets/Images/Uploads/scroll-image.webp';

export const FullWidthScrollImage = () => {
    return (
        <>
         	<section className="fullwidth-scroll-image gsap progresso-grid">
                <div className="image-container scroll-image-container">
                        <img src={Scrollimage} alt='' />
                    <div>
                        <h2><span>90%</span> of our students speak more confidently after taking Progresso classes</h2>
                        <small>- progresso student survey 2024</small>
                        <a className="link button primary blue mobile" href="get-started.html">Start for free</a>
                    </div>
                    <span className="button primary blue cursor">Start for free</span>
                </div>
            </section>
        </>
    )
}