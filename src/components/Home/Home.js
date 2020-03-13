import React from 'react';
import Typical from 'react-typical';
import './Home.scss';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='home-wrapper'>
				<h1 className='home-h1'>
					Hi, I'm <span className='home-initials'>W</span>an{' '}
					<span className='home-initials'>S</span>heng
				</h1>
				<h3 className='home-h3'>Full Stack Web Developer</h3>
				<h3 className='home-h3'>
					<Typical
						loop={Infinity}
						wrapper='b'
						steps={[
							'Java',
							1000,
							'React.js',
							1000,
							'Python',
							1000,
							'Django',
							1000,
							'Node.js',
							1000
						]}
					/>
				</h3>
			</div>
		</div>
	);
};

export default Home;
