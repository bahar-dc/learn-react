import CourseImage1 from'../Assets/Images/Uploads/learn-01.webp';
import CourseImage2 from'../Assets/Images/Uploads/learn-02.webp';
import CourseImage3 from'../Assets/Images/Uploads/learn-03.webp';
import CourseImage4 from'../Assets/Images/Uploads/learn-04.webp';
import CourseImage6 from'../Assets/Images/Uploads/learn-06.webp';
import CourseImage8 from'../Assets/Images/Uploads/learn-08.webp';

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
                                    <img src={CourseImage8} alt="Alt text" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>Confidence & Public Speaking Essentials</p><span></span>
                                    </div>
                                    <h3 className="card-title">Build Confidence & Master Public Speaking</h3>
                                    <ul className="text-list">
                                        <p>A course crafted to empower individuals with essential communication and presentation skills, helping you present confidently in personal and professional settings.</p>
                                    </ul>
                                   <div className="link-container"><a href="flex.html" className="link button blue secondary">Learn more</a></div>
                                </div>
                            </div>
                            <div className=" card">
                                <div className="card-image">
                                    <img src={CourseImage6} alt="Alt text" />
                                   {/* <span>Free trial</span> */}
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <p>Everyday English: Interview & Cultural Adaptation</p><span></span>
                                    </div>
                                    <h3 className="card-title">Flourish Abroad with Everyday English</h3>
                                    <ul className="text-list">
                                       <p>An integrated program for newcomers to Canada focusing on English fluency, interview prep, and cultural adaptation, making everyday interactions seamless and comfortable.
</p>
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