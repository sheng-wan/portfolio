import React from 'react';
import placeholder from '../../../images/logo-yellow.png';
import './Intro.scss';

const Intro = () => {
	return (
		<>
			<div className='container mb-5'>
				<h1
					id='about-me-heading'
					className='text-center text-primary my-4 pb-2 position-relative'
				>
					{' '}
					about me{' '}
				</h1>{' '}
				<div class='row my-4'>
					<div className='col-md-4 pb-3 py-sm-0'>
						<img
							className='img-fluid img-thumbnail'
							src={placeholder}
							alt=''
						></img>{' '}
						<div className='row mt-4'>
							<a
								href='/projects'
								className='d-lg-none col-lg-12 about-btn btn btn-lg btn-outline-primary mx-4 mb-2'
							>
								my works{' '}
							</a>{' '}
							<a
								href='https://1drv.ms/b/s!AlxdLtWJy59D0V8_p8Cr7qY618mP'
								className='d-lg-none col-lg-12 about-btn btn btn-lg btn-secondary mx-4 mb-2'
								target='_blank'
								rel='noopener noreferrer'
							>
								my resume{' '}
							</a>{' '}
							<a
								href='#timeline-heading'
								className='d-lg-none col-lg-12 about-btn btn btn-lg btn-primary mx-4 mb-2'
							>
								experience{' '}
							</a>{' '}
						</div>{' '}
					</div>{' '}
					<div className='col-md-8'>
						<div>
							<p className='lead'>
								Greetings, I am Wan Sheng, a self-efficient Full-Stack Web
								Developer, specializing in JavaScript, React.js, Python, Django,
								CSS and more.
							</p>{' '}
							<p className='lead'>
								Although most of my past experience are business operation and
								ecommerce related, software development has always been my
								passion. Moreover, I think it prepares me to be a better web
								developer since I know more about what the clients see and their
								logic. If you like my works, or interested in me, feel free to
								reach me out. I am willing to take any coding challenges.
							</p>{' '}
							<div id='btn-row' className='row '>
								<a
									id='about-btn about-btn-main'
									href='/projects'
									className='col-xl-3 col-lg-12 btn btn-lg btn-outline-primary mx-2 mb-2'
								>
									my works{' '}
								</a>{' '}
								<a
									id='about-btn about-btn-main'
									href='https://1drv.ms/b/s!AlxdLtWJy59D0V8_p8Cr7qY618mP'
									className='col-xl-3 col-lg-12 btn btn-lg btn-secondary mx-2 mb-2'
									target='_blank'
									rel='noopener noreferrer'
								>
									my resume{' '}
								</a>{' '}
								<a
									id='about-btn about-btn-main'
									href='#timeline-heading'
									className='col-xl-3 col-lg-12 btn btn-lg btn-primary mx-2 mb-2'
								>
									experience{' '}
								</a>{' '}
							</div>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</>
	);
};

export default Intro;
