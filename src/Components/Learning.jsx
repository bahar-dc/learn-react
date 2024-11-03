import LearningImage1 from'../Assets/Images/Uploads/progresso-image-01-min.jpg';
import LearningImage2 from'../Assets/Images/Uploads/progresso-image-02-min.jpg';
// import LearningImage3 from'../Assets/Images/Uploads/progresso-image-03-min.jpg';
// import LearningImage4 from'../Assets/Images/Uploads/progresso-image-04-min.jpg';
import LearningImage5 from'../Assets/Images/Uploads/progresso-image-05-min.jpg';
import LearningImage6 from'../Assets/Images/Uploads/progresso-image-06-min.jpg';


import CourseImage1 from'../Assets/Images/Uploads/course-img-01.svg';
import CourseImage2 from'../Assets/Images/Uploads/course-img-02-min.png';
import CourseImage3 from'../Assets/Images/Uploads/course-img-03.svg';
import CourseImage4 from'../Assets/Images/Uploads/course-img-04.svg';

export const Learning = () => {
    return (
        <>
            <section className="learning-styles-carousel">
                <div>
                    <div className="site-container learning-section-head">
                        <h2>Courses Tailored for Your  <br /> <span>Success
                            </span></h2>
                    </div>
                    <div className="site-container learning-styles-cards dekstop-cards">
                        <div className="cards-container">
                            <div className=" card">
                                <div className="card-image">
                                    <img src={CourseImage2} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>IELTS</p><span></span>
                                    </div>
                                    <h3 className="card-title">IELTS Preparation</h3>
                                    <ul className="text-list">
                                        <p>Progresso Learning Institute offers in-depth lessons across all IELTS components: listening, reading, <br /> writing, and speaking. This course includes practice exams, scoring strategies, and personalized feedback to help you excel.</p>
                                    </ul>
                                    <div className="link-container"><a href="sprint.html"
                                            className="link button blue secondary">Learn more</a></div>
                                </div>
                            </div>
                            <div className=" card">
                                <div className="card-image">
                                    <img src={CourseImage1} alt="Alt text" />
                                   {/* <span>Free trial</span> */}
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>CELPIP Training</p><span></span>
                                    </div>
                                    <h3 className="card-title">CELPIP Test Preparation for Canadian Permanent Residency</h3>
                                    <ul className="text-list">
                                       <p>Tailored for success, our CELPIP course provides detailed lessons in all four test sections. Practice with mock tests, learn effective strategies, and get personalized support to achieve the score you need.</p>
                                    </ul>
                                    <div className="link-container"><a href="flex.html" className="link button blue secondary">Learn more</a></div>
                                </div>
                            </div>
                            <div className=" card">
                                <div className="card-image">
                                    <img src={CourseImage3} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>PTE Coaching</p><span></span>
                                    </div>
                                    <h3 className="card-title">Score High on the PTE with Professional Guidance</h3>
                                    <ul className="text-list">
                                        <p>Progresso Learning Institute's PTE course focuses on core test areas with a mix of test strategies, mock exams, and tailored feedback to help you succeed on your journey.</p>
                                    </ul>
                                    <div className="link-container"><a href="flex.html" className="link button blue secondary">Learn more</a></div>
                                </div>
                            </div>
                            <div className=" card">
                                <div className="card-image">
                                    <img src={CourseImage4} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>English Language Classes</p><span></span>
                                    </div>
                                    <h3 className="card-title">Learn English to Excel in Canada and Beyond</h3>
                                    <ul className="text-list">
                                        <p>Our English classes are designed for non-native speakers looking to improve grammar, vocabulary, fluency, and writing. Build a solid language foundation with flexible, real-world learning techniques.</p>
                                    </ul>
                                   <div className="link-container"><a href="flex.html" className="link button blue secondary">Learn more</a></div>
                                </div>
                            </div>
                            <div className=" card">
                                <div className="card-image">
                                    <img src={LearningImage5} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>Confidence Building</p><span></span>
                                    </div>
                                    <h3 className="card-title">Develop Confidence in Communication</h3>
                                    <ul className="text-list">
                                       <p>Gain communication and assertiveness skills through workshops designed to increase public speaking ability and social confidence. Perfect for newcomers or anyone aiming to strengthen their voice.</p>
                                    </ul>
                                   <div className="link-container"><a href="flex.html" className="link button blue secondary">Learn more</a></div>
                                </div>
                            </div>
                            <div className=" card">
                                <div className="card-image">
                                    <img src={LearningImage6} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>Public Speaking</p><span></span>
                                    </div>
                                    <h3 className="card-title">Public Speaking Skills for Career & Personal Growth</h3>
                                    <ul className="text-list">
                                       <p>Our public speaking course covers everything from basic communication techniques to advanced presentation skills. Ideal for students and professionals looking to excel in their fields.</p>
                                    </ul>
                                   <div className="link-container"><a href="flex.html" className="link button blue secondary">Learn more</a></div>
                                </div>
                            </div>
                            <div className=" card">
                                <div className="card-image">
                                    <img src={LearningImage2} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>Interview Preparation</p><span></span>
                                    </div>
                                    <h3 className="card-title">Ace Your Job Interviews with Expert Guidance</h3>
                                    <ul className="text-list">
                                        <p>Practice mock interviews, learn to tackle challenging questions, and boost your interview confidence. Perfect for job seekers looking to stand out in competitive fields.</p>
                                    </ul>
                                    <div className="link-container"><a href="flex.html" className="link button blue secondary">Learn more</a></div>
                                </div>
                            </div>
                            <div className=" card">
                                <div className="card-image">
                                    <img src={LearningImage1} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>Confidence and Cultural Adaptation</p><span></span>
                                    </div>
                                    <h3 className="card-title">Thriving Abroad: Confidence and Cultural Adaptation</h3>
                                    <ul className="text-list">
                                        <p>This course offers newcomers practical skills to adjust to a new culture and build connections confidently. Learn everything from local etiquette, dressing appropriately, interview preparation, to effective networking and making lasting friendships.</p>
                                    </ul>
                                   <div className="link-container"><a href="flex.html" className="link button blue secondary">Learn more</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}