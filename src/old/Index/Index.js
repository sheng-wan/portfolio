import React from 'react';
import './Index.scss';

const Index = () => {
	return (
		<div
			id='index-container'
			className='container-fluid position-absolute h-100 d-flex align-items-center'
		>
			<div className='container pl-4 h-25'>
				<h1 id='index-title-1' className='text-white'>
					Hi, I'm <span className='text-primary'>W</span>an{' '}
					<span className='text-primary'>S</span>heng
				</h1>
				<h4 id='index-title-2' className='text-primary font-weight-bold'>
					Full Stack Web Developer
				</h4>
			</div>
		</div>
	);
};

export default Index;