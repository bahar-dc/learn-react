import bannerImage2 from'../Assets/Images/Uploads/about-us-hero.webp';
import { Header } from "./Header";
import { Footer } from "./Footer";
import  AboutImage01  from "../Assets/Images/Uploads/about-img-01.webp";
import  AboutImage02  from "../Assets/Images/Uploads/about-img-02.webp";
import  AboutImage03  from "../Assets/Images/Uploads/about-img-03.webp";

export const AboutUs = () => {
    return (
        <>
          <Header/>
            <section className="hiw-hero hero-home">
                <div className="bg-container">
                    <div className="bg-img">
                        <img src={bannerImage2} alt="About Us Hero Image" />
                    </div>
                </div>
                <div className="lingoda-container single-col">
                    <div className="text-col">
                    <h1>How Lingoda Works</h1>
                    <p className="content">Find out how lessons work, how to get started, and how Lingoda can help you speak the language with confidence.</p>
                    </div>
                </div>
            </section>
            <section  className="tw-section tw-block-benefits-cards-2-2 ">
              <div className="tw-container-custom">
                <p className="tw-text-lg tw-inline-block small-text tw-font-normal">ADVANTAGES</p>
                <h2 className="hero-title-2-0 tw-font-bold tw-mb-3 ">Online learning at Lingoda</h2>
              </div>
              <div className="tw-container-custom">
                <div className="tw-flex">
                  <div className="tw-w-full tw-px-0">
                    <div className="benefit-card-slider adaptive-height">
                      <div className="slide">
                        <div className="single-card col-card">
                          <div className="card-wrapper tw-flex tw-flex-col">
                            <img src={AboutImage01} alt="About Us Hero" />
                            <p className="tw-text-lg">
                            Practice speaking</p>
                            <p className="slider-content tw-font-normal">
                            Our lessons are designed with the students' interests in mind, so you will always have time to practice speaking and improve your pronunciation.</p>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="single-card col-card">
                          <div className="card-wrapper tw-flex tw-flex-col">
                          <img src={AboutImage02} alt="About Us Hero" />
                            <p className="tw-text-lg">
                            Practice speaking</p>
                            <p className="slider-content tw-font-normal">
                            Our lessons are designed with the students' interests in mind, so you will always have time to practice speaking and improve your pronunciation.</p>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="single-card col-card">
                          <div className="card-wrapper tw-flex tw-flex-col">
                            <img src={AboutImage03} alt="About Us Hero" />
                            <p className="tw-text-lg">
                            Practice speaking</p>
                            <p className="slider-content tw-font-normal">
                            Our lessons are designed with the students' interests in mind, so you will always have time to practice speaking and improve your pronunciation.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          <Footer />
        </>
    )
}