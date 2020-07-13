import React from 'react';
import ProjectCard from './projects_components/ProjectCard';
import { addBackToTop } from 'vanilla-back-to-top';

const Projects = () => {
	addBackToTop({
		backgroundColor: '#0f4c81',
	});

	return (
		<div className='projects-container'>
			<ProjectCard />
		</div>
	);
};

export default Projects;
