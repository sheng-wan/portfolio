import React from 'react';
import './About.scss';
import { AboutMe } from '../../components/about_components/AboutMe';
import Timeline from '../../components/about_components/Timeline';
import Skills from '../../components/about_components/Skills';
import { addBackToTop } from 'vanilla-back-to-top';

const About = () => {
	addBackToTop({
		backgroundColor: '#0f4c81',
	});

	return (
		<div className='container'>
			<AboutMe />
			<Skills />
			<Timeline />
		</div>
	);
};

export default About;
