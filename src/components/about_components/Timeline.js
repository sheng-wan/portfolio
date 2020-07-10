import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Timeline.scss';

const Timeline = () => {
	AOS.init();

	return (
		<div className='timeline-container'>
			<h1 className='timeline-h1'>my timeline</h1>
			<div className='timeline-wrapper'>
				<ul className='timeline-ul'>
					<li className='timeline-li'>
						<div
							className='timeline-content'
							data-aos='fade-right'
							data-aos-duration='1000'
						>
							<h3 className='timeline-h3'>habitasse platea dictumst quisque</h3>
							<p className='timeline-p'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							className='timeline-time'
							data-aos='fade-right'
							data-aos-duration='1000'
						>
							<h4 className='timeline-h4'>November 2020</h4>
						</div>
					</li>
					<li className='timeline-li'>
						<div
							className='timeline-content'
							data-aos='fade-left'
							data-aos-duration='1000'
						>
							<h3 className='timeline-h3'>habitasse platea dictumst quisque</h3>
							<p className='timeline-p'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							className='timeline-time'
							data-aos='fade-left'
							data-aos-duration='1000'
						>
							<h4 className='timeline-h4'>November 2020</h4>
						</div>
					</li>
					<li className='timeline-li'>
						<div
							className='timeline-content'
							data-aos='fade-right'
							data-aos-duration='1000'
						>
							<h3 className='timeline-h3'>habitasse platea dictumst quisque</h3>
							<p className='timeline-p'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							className='timeline-time'
							data-aos='fade-right'
							data-aos-duration='1000'
						>
							<h4 className='timeline-h4'>November 2020</h4>
						</div>
					</li>
					<li className='timeline-li'>
						<div
							className='timeline-content'
							data-aos='fade-left'
							data-aos-duration='1000'
						>
							<h3 className='timeline-h3'>habitasse platea dictumst quisque</h3>
							<p className='timeline-p'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							className='timeline-time'
							data-aos='fade-left'
							data-aos-duration='1000'
						>
							<h4 className='timeline-h4'>November 2020</h4>
						</div>
					</li>
					<li className='timeline-li'>
						<div
							className='timeline-content'
							data-aos='fade-right'
							data-aos-duration='1000'
						>
							<h3 className='timeline-h3'>habitasse platea dictumst quisque</h3>
							<p className='timeline-p'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							className='timeline-time'
							data-aos='fade-right'
							data-aos-duration='1000'
						>
							<h4 className='timeline-h4'>November 2020</h4>
						</div>
					</li>
					<li className='timeline-li'>
						<div
							className='timeline-content'
							data-aos='fade-left'
							data-aos-duration='1000'
						>
							<h3 className='timeline-h3'>habitasse platea dictumst quisque</h3>
							<p className='timeline-p'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							className='timeline-time'
							data-aos='fade-left'
							data-aos-duration='1000'
						>
							<h4 className='timeline-h4'>November 2020</h4>
						</div>
					</li>

					<div className='clear'></div>
				</ul>
			</div>
		</div>
	);
};

export default Timeline;
