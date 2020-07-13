import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Timeline.scss';

const Timeline = () => {
	AOS.init();

	return (
		<div className='container mb-5'>
			<h1
				id='timeline-heading'
				className='text-center text-primary mb-5 pb-2 position-relative'
			>
				my timeline
			</h1>
			<div id='timeline-wrapper' className='position-relative'>
				<ul id='timeline-ul' className='p-0 m-0 list-unstyled'>
					<li id='timeline-li'>
						<div
							className='timeline-box pb-3'
							data-aos='fade-right'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-subtitle' className='m-0 p-0 text-primary'>
								habitasse platea dictumst quisque
							</h4>
							<p className='timeline-desc pb-0 my-2'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							id='timeline-capsule'
							className='position-absolute m-0 bg-primary text-white'
							data-aos='fade-right'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-datetime' className='m-0 p-0'>
								November 2020
							</h4>
						</div>
					</li>
					<li id='timeline-li'>
						<div
							className='timeline-box pb-3'
							data-aos='fade-left'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-subtitle' className='m-0 p-0 text-primary'>
								habitasse platea dictumst quisque
							</h4>
							<p className='timeline-desc pb-0 my-2'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							id='timeline-capsule'
							className='position-absolute m-0 bg-primary text-white'
							data-aos='fade-left'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-datetime' className='m-0 p-0'>
								November 2020
							</h4>
						</div>
					</li>
					<li id='timeline-li'>
						<div
							className='timeline-box pb-3'
							data-aos='fade-right'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-subtitle' className='m-0 p-0 text-primary'>
								habitasse platea dictumst quisque
							</h4>
							<p className='timeline-desc pb-0 my-2'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							id='timeline-capsule'
							className='position-absolute m-0 bg-primary text-white'
							data-aos='fade-right'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-datetime' className='m-0 p-0'>
								November 2020
							</h4>
						</div>
					</li>
					<li id='timeline-li'>
						<div
							className='timeline-box pb-3'
							data-aos='fade-left'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-subtitle' className='m-0 p-0 text-primary'>
								habitasse platea dictumst quisque
							</h4>
							<p className='timeline-desc pb-0 my-2'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							id='timeline-capsule'
							className='position-absolute m-0 bg-primary text-white'
							data-aos='fade-left'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-datetime' className='m-0 p-0'>
								November 2020
							</h4>
						</div>
					</li>
					<li id='timeline-li'>
						<div
							className='timeline-box pb-3'
							data-aos='fade-right'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-subtitle' className='m-0 p-0 text-primary'>
								habitasse platea dictumst quisque
							</h4>
							<p className='timeline-desc pb-0 my-2'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							id='timeline-capsule'
							className='position-absolute m-0 bg-primary text-white'
							data-aos='fade-right'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-datetime' className='m-0 p-0'>
								November 2020
							</h4>
						</div>
					</li>
					<li id='timeline-li'>
						<div
							className='timeline-box pb-3'
							data-aos='fade-left'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-subtitle' className='m-0 p-0 text-primary'>
								habitasse platea dictumst quisque
							</h4>
							<p className='timeline-desc pb-0 my-2'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Adipiscing at in tellus integer. Montes nascetur ridiculus mus
								mauris vitae ultricies leo.
							</p>
						</div>
						<div
							id='timeline-capsule'
							className='position-absolute m-0 bg-primary text-white'
							data-aos='fade-left'
							data-aos-duration='1000'
							data-aos-once='true'
						>
							<h4 id='timeline-datetime' className='m-0 p-0'>
								November 2020
							</h4>
						</div>
					</li>

					<div className='clear'></div>
				</ul>
			</div>
		</div>
	);
};

export default Timeline;
