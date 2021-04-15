import React from 'react';
import threeCircles from '../images/yellowcircles.png';
import logo from '../images/logo.png';

const About = () => {
	return (
		<div>
			<div id="logo-container">
				<img class="logo" src={logo} />
			</div>
			<div class="main">
				<br />
				<h3>ABOUT ME</h3>
				<div id="about-me">
					After six years as an Advanced Algebra and AP Statistics teacher in urban education, I am excited to
					transition into web development! After self-directed learning for months, I recently completed an
					intensive web development bootcamp program where I could fully immerse myself in the field. I found
					my background in mathematics and statistics not only to be incredibly useful in understanding the
					type of problem solving that web development demands, I revelled in the opportunity to think
					critically, logically, and mathematically in new ways. As a teacher, I constantly thought about how
					to make math content accessbile - minimizing clicks and steps to getting to the meat of the lesson -
					and I have found the design instincts I developed in my teaching career to be tremendously useful as
					I think about user experience and interface in web development. The more I learn about web
					development, the more I find new interests and passions, such as sleek design, building intuitive
					and efficient systems. I am excited to continue to learn and grow in the field!
				</div>


				{/* <h3>CONTACT INFO</h3> */}

				<div id="contact-info">
				<img className="three-circles" src={threeCircles} />

					<div id="left-side"><h3>meganzinka@gmail.com</h3></div>
					<div id="right-side"><h3>linkedin.com/in/meganzinka</h3></div>
				</div>
			</div>
		</div>
	);
};

export default About;
