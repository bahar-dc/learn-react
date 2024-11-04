import StickyImage9 from'../Assets/Images/Uploads/learn-09.webp';
import StickyImag10 from'../Assets/Images/Uploads/learn-10.webp';
import StickyImage11 from'../Assets/Images/Uploads/learn-11.webp';

export const StickyWIthText = () => {
    return (
        <>
        <section id="block-text-with-lottie-animations-6"
			className="text-with-lottie-animations lottie-player gsap progresso-grid" data-view="text-with-lottie-animations"
			style={{backgroundColor:'#ECEFFF',color:'#FFFFFF'}}>
			<div className="bg"></div>
			<div className="site-container">
				<div className="text-column text-column--mobile">
					<div className="content">
						<h2>Your language learning <span>partner</span></h2>
						<p>As experts in language learning we will guide and support you every step on the way. With us,
							you can stay on track and reach your language goals sooner.</p>
							<a className="link button primary blue" href="/get-started">Register Now</a>
							<a className="link button secondary blue" href="/get-started">Free Language Evaluation</a>
					</div>
				</div>
				<div className="scroll-container">
					<div className="text-column text-column--desktop">
						<div className="content">
							<h2>Your language learning <span>partner</span></h2>
							<p>As experts in language learning we will guide and support you every step on the way. With
								us, you can stay on track and reach your language goals sooner.</p><a
								className="link button primary blue" href="/get-started">Register Now</a>
								<a className="link button secondary blue" href="/get-started">Free Language Evaluation</a>
						</div>
					</div>
					<div className="lottie-column">
						<ul className="lottie-list">
							<li className="lottie-item">
								<div className="spacer lottie-1-intro"></div>
								<div className="lottie-scroll-container">
									<div className="lottie-inner">
										<div>
											<div className="lottie-image">
												<img src={StickyImage9} alt='' />
											</div>
											<div className="lottie-content">
												<h3>Interactive, immersive classes</h3>
												<p>Our teachers will immerse you in the target language from the start,
													so you&rsquo;ll get used to hearing and speaking it quickly.</p><a
													className="link button primary blue" href="/get-started">Start for
													free</a>
											</div>
										</div>
									</div>
								</div>
								<div className="spacer lottie-1-outro"></div>
							</li>
							<li className="lottie-item">
								<div className="spacer lottie-2-intro"></div>
								<div className="lottie-scroll-container">
									<div className="lottie-inner">
										<div>
											<div className="lottie-image">
												<img src={StickyImag10} alt='' />
											</div>
											<div className="lottie-content">
												<h3>World-class curriculum</h3>
												<p>Our structured curriculum is designed to help you speak about
													interesting topics you can use in everyday life.</p><a
													className="link button primary blue"  href="/get-started">Start for
													free</a>
											</div>
										</div>
									</div>
								</div>
								<div className="spacer lottie-2-outro"></div>
							</li>
							<li className="lottie-item">
								<div className="spacer lottie-3-intro"></div>
								<div className="lottie-scroll-container">
									<div className="lottie-inner">
										<div>
											<div className="lottie-image">
												<img src={StickyImage11} alt='' />
											</div>
											<div className="lottie-content">
												<h3>Keep learning after class</h3>
												<p>Stay on target with our smart self-learning tools like flashcards,
													quizzes and bite-sized exercises.</p><a
													className="link button primary blue"  href="/get-started">Start for
													free</a>
											</div>
										</div>
									</div>
								</div>
								<div className="spacer lottie-3-outro"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}