import React from 'react';
import placeholder from '../../images/2.png';
import './AboutMe.scss';

export const AboutMe = () => (
	<div className='container mb-5'>
		<h1 className='h1-about-me text-center text-primary my-4 pb-2 position-relative'>
			{' '}
			about me{' '}
		</h1>
		<div class='row my-4'>
			<div className='col-sm-4 pb-3 py-sm-0'>
				<img className='img-fluid img-thumbnail' src={placeholder} alt=''></img>
			</div>
			<div className='col-sm-8'>
				<div className='about-me-p'>
					<p className='lead'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<p className='lead'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<div className='row'>
						<button className='btn-about btn btn-lg btn-outline-primary ml-3 mr-4'>
							my works
						</button>
						<button className='btn-about btn btn-lg btn-secondary mr-4'>
							resume
						</button>
						<button className='btn-about btn btn-lg btn-primary'>
							contact me
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);
