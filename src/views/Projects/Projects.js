import React from 'react';
import './Projects.scss';
import ProjectCard from '../../components/projects_components/ProjectCard';
import { addBackToTop } from 'vanilla-back-to-top';

const Projects = () => {
	addBackToTop({
		backgroundColor: '#0f4c81',
	});

	return (
		<div className='projects-container'>
			{/* <h1> project page </h1> */}
			<ProjectCard />
		</div>
	);
};

export default Projects;
