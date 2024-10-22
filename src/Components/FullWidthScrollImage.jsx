import Scrollimage from'../Assets/Images/Uploads/scroll-image.png';

export const FullWidthScrollImage = () => {
    return (
        <>
         	<section id="block-fullwidth-scroll-image-5" className="fullwidth-scroll-image gsap lingoda-grid">
                <div className="image-container">
                        <img src={Scrollimage} alt='' />
                    <div>
                        <h2><span>90%</span> of our students speak more confidently after taking Lingoda classes</h2>
                        <small>- Lingoda student survey 2022</small>
                        <a className="link button primary blue mobile" href="get-started.html">Start for free</a>
                    </div>
                    <span className="button primary blue cursor">Start for free</span>
                </div>
            </section>
        </>
    )
}