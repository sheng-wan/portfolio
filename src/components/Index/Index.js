import React from 'react';
import Typical from 'react-typical';
import './Index.scss';

const Index = () => {
	return (
		<div
			id='index-container'
			className='container-fluid position-absolute h-100 d-flex align-items-center'
		>
			<div className='container pl-4'>
				<h1 id='index-title-1' className='text-white'>
					Hi, I'm <span className='text-primary'>W</span>an{' '}
					<span className='text-primary'>S</span>heng
				</h1>
				<h4 id='index-title-2' className='text-light'>
					Full Stack Web Developer
				</h4>
				<h4 id='index-title-3' className='text-dark'>
					<Typical
						loop={Infinity}
						wrapper='b'
						steps={[
							'JavaScript',
							1000,
							'React.js',
							1000,
							'Python',
							1000,
							'Django',
							1000,
							'Node.js',
							1000,
							'Java',
							1000,
							'Sass',
							1000,
							'HTML',
							1000,
							'jQuery',
							1000,
							'MongoDB',
							1000,
							'MySQL',
							1000,
							'PostgreSQL',
							1000,
							'git',
							1000,
							'Bootstrap',
							1000,
							'CSS',
							1000,
						]}
					/>
				</h4>
			</div>
		</div>
	);
};

export default Index;
