import React, { useState } from 'react';
import placeholder from '../../../images/2.png';
import './Intro.scss';
import MyModal from './MyModal';

const Intro = () => {
	const [modalShow, setModalShow] = useState(false);

	return (
		<>
			<div className='container mb-5'>
				<h1 className='h1-about-me text-center text-primary my-4 pb-2 position-relative'>
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
								href='#'
								className='d-lg-none col-lg-12 about-btn btn btn-lg btn-secondary mx-4 mb-2'
							>
								my resume{' '}
							</a>{' '}
							<button
								className='d-lg-none col-lg-12 about-btn btn btn-lg btn-primary mx-4 mb-2'
								onClick={() => setModalShow(true)}
							>
								contact me{' '}
							</button>{' '}
						</div>{' '}
					</div>{' '}
					<div className='col-md-8'>
						<div className='about-me-p'>
							<p className='lead'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.{' '}
							</p>{' '}
							<p className='lead'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.{' '}
							</p>{' '}
							<div className='row ' id='btn-row'>
								<a
									href='/projects'
									className='col-xl-3 col-lg-12 about-btn about-btn-main btn btn-lg btn-outline-primary mx-2 mb-2'
								>
									my works{' '}
								</a>{' '}
								<a
									href='#'
									className='col-xl-3 col-lg-12 about-btn about-btn-main btn btn-lg btn-secondary mx-2 mb-2'
								>
									my resume{' '}
								</a>{' '}
								<button
									className='col-xl-3 col-lg-12 about-btn btn btn-lg btn-primary mx-2 mb-2'
									onClick={() => setModalShow(true)}
								>
									contact me{' '}
								</button>{' '}
							</div>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
			<MyModal show={modalShow} onHide={() => setModalShow(false)} />{' '}
		</>
	);
};

export default Intro;
