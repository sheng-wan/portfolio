import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../images/2.png';

import './About.scss';

const About = () => {
	AOS.init();

	return (
		<div className='about-container'>
			<h1> about me </h1>
			<div className='about-me'>
				<div className='about-me-p'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className='about-me-img'>
					<img src={image} alt=''></img>
				</div>
			</div>
			<div>
				<h1> skills section </h1>
			</div>
			<div className='timeline-wrapper'>
				<h1>Pure Responsive CSS Timeline</h1>
				<div className='timeline'>
					<ul>
						<li>
							<div
								className='content'
								data-aos='fade-right'
								data-aos-duration='1000'
							>
								<h3>habitasse platea dictumst quisque</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Adipiscing at in tellus integer. Montes nascetur ridiculus mus
									mauris vitae ultricies leo.
								</p>
							</div>
							<div
								className='time'
								data-aos='fade-right'
								data-aos-duration='1000'
							>
								<h4>November 2020</h4>
							</div>
						</li>
						<li>
							<div
								className='content'
								data-aos='fade-left'
								data-aos-duration='1000'
							>
								<h3>habitasse platea dictumst quisque</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Adipiscing at in tellus integer. Montes nascetur ridiculus mus
									mauris vitae ultricies leo.
								</p>
							</div>
							<div
								className='time'
								data-aos='fade-left'
								data-aos-duration='1000'
							>
								<h4>November 2020</h4>
							</div>
						</li>
						<li>
							<div
								className='content'
								data-aos='fade-right'
								data-aos-duration='1000'
							>
								<h3>habitasse platea dictumst quisque</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Adipiscing at in tellus integer. Montes nascetur ridiculus mus
									mauris vitae ultricies leo.
								</p>
							</div>
							<div
								className='time'
								data-aos='fade-right'
								data-aos-duration='1000'
							>
								<h4>November 2020</h4>
							</div>
						</li>
						<li>
							<div
								className='content'
								data-aos='fade-left'
								data-aos-duration='1000'
							>
								<h3>habitasse platea dictumst quisque</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Adipiscing at in tellus integer. Montes nascetur ridiculus mus
									mauris vitae ultricies leo.
								</p>
							</div>
							<div
								className='time'
								data-aos='fade-left'
								data-aos-duration='1000'
							>
								<h4>November 2020</h4>
							</div>
						</li>
						<li>
							<div
								className='content'
								data-aos='fade-right'
								data-aos-duration='1000'
							>
								<h3>habitasse platea dictumst quisque</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Adipiscing at in tellus integer. Montes nascetur ridiculus mus
									mauris vitae ultricies leo.
								</p>
							</div>
							<div
								className='time'
								data-aos='fade-right'
								data-aos-duration='1000'
							>
								<h4>November 2020</h4>
							</div>
						</li>
						<li>
							<div
								class='content'
								data-aos='fade-right'
								data-aos-duration='1000'
							>
								<h3>habitasse platea dictumst quisque</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Adipiscing at in tellus integer. Montes nascetur ridiculus mus
									mauris vitae ultricies leo.
								</p>
							</div>
							<div
								className='time'
								data-aos='fade-right'
								data-aos-duration='1000'
							>
								<h4>November 2020</h4>
							</div>
						</li>
						{/* <div style='clear: both'></div> */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
