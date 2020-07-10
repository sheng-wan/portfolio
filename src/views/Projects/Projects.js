import React from 'react';
import './Projects.scss';
import Showcase from '../../components/projects_components/Showcase';
import { addBackToTop } from 'vanilla-back-to-top';

const Projects = () => {
	addBackToTop({
		backgroundColor: '#0f4c81'
	});

	return (
		<div className='projects-container'>
			{/* <h1> project page </h1> */}
			<Showcase />
		</div>
	);
};

export default Projects;
