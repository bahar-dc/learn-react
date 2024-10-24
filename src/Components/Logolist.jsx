import Logo01 from '../Assets/Images/Uploads/logo-01.svg';
import Logo02 from '../Assets/Images/Uploads/logo-02.svg';
import Logo03 from '../Assets/Images/Uploads/logo-03.svg';
import Logo04 from '../Assets/Images/Uploads/logo-04.svg';
import Logo05 from '../Assets/Images/Uploads/logo-05.svg';
import Logo06 from '../Assets/Images/Uploads/logo-06.svg';
import Logo07 from '../Assets/Images/Uploads/logo-07.svg';

export const Logolist = () => {

    return (
        <>
           <section className="trustpilot-block trustpilot new-layout lingoda-block" style={{backgroundColor:'#051F4E'}}>
                <div className="site-container">
                    <h2 className="toggle-heading" style={{color:'#ffffff'}}>What students <span>love</span> about us</h2>
                </div>
            </section>

            <section className="carousel-logo-list ">
                <div style={{backgroundColor:'#051F4E'}}>
                    <div className="site-container">
                        <h2>Lingoda in the <span>press</span></h2>
                    </div>
                    <div className="carousel-container">
					<div className="splide">
						<div className="splide__track">
							<div className="splide__list">
								<div className="splide__slide"><img src={Logo01} alt="" /></div>
								<div className="splide__slide"><img src={Logo02} alt="" /></div>
								<div className="splide__slide"><img src={Logo03} alt="" /></div>
								<div className="splide__slide"><img src={Logo04} alt="" /></div>
								<div className="splide__slide"><img src={Logo05} alt="" /></div>
								<div className="splide__slide"><img src={Logo06} alt="" /></div>
								<div className="splide__slide"><img src={Logo07} alt="" /></div>
							</div>
						</div>
					</div>
					
					<span className="button primary white cursor">Read article</span>
				</div>        
                </div>
            </section>
        </>
    )
}