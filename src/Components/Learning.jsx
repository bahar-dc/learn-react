import LearningImage1 from'../Assets/Images/Uploads/learning-image-01.webp';
import LearningImage2 from'../Assets/Images/Uploads/learning-image-02.webp';
import LearningImage3 from'../Assets/Images/Uploads/learning-image-03.webp';

export const Learning = () => {
    return (
        <>
            <section className="learning-styles-carousel">
                <span className="outer-bg" style={{background:'#ECEFFF'}}></span>
                <div>
                    <div className="site-container">
                        <h2>Choose your <span style={{color:'#153bff'}}>learning preference
                            </span></h2>
                    </div>
                    <div className="site-container learning-styles-cards dekstop-cards">
                        <div className="cards-container">
                            <div className=" card">
                                <div className="card-image">
                                    <img src={LearningImage1} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>Sprint</p><span></span>
                                    </div>
                                    <h3 className="card-title">Beat the 1-month learning challenge!</h3>
                                    <ul className="text-list">
                                        <li>
                                           2 Intensities - 4 or 6 lessons per week
                                        </li>
                                        <li>
                                          Continuous learning over 1 month
                                        </li>
                                        <li>
                                           Win 50% money or class credits back
                                        </li>
                                    </ul>
                                    <div className="link-container"><a href="sprint.html"
                                            className="link button blue secondary">More about Sprint</a></div>
                                </div>
                            </div>
                            <div className=" card cat-flex">
                                <div className="card-image">
                                    <img src={LearningImage2} alt="Alt text" />
                                   <span>Free trial</span>
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>Flex</p><span></span>
                                    </div>
                                    <h3 className="card-title">Take your classes whenever you want!</h3>
                                    <ul className="text-list">
                                        <li>
                                          Live classes available 24/7 &ndash; full flexibility
                                        </li>
                                        <li>
                                          Monthly subscription &ndash; cancel anytime
                                        </li>
                                        <li>
                                          Try up to 3 classes for free before you buy
                                        </li>
                                    </ul>
                                    <div className="link-container"><a href="flex.html" className="link button blue primary">More
                                            about Flex</a></div>
                                </div>
                            </div>
                            <div className=" card">
                                <div className="card-image">
                                    <img src={LearningImage3} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>Teams</p><span></span>
                                    </div>
                                    <h3 className="card-title">Complete a course together with a dedicated team!</h3>
                                    <ul className="text-list">
                                        <li>
                                          Progress with the same teacher and team
                                        </li>
                                        <li>
                                          Choose a 8-week or 12-week course
                                        </li>
                                        <li>
                                          Finish a level with your team
                                        </li>
                                    </ul>
                                    <div className="link-container"><a href="teams.html" className="link button blue secondary">More
                                            about Teams</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}