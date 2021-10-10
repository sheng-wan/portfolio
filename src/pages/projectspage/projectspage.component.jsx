import { addBackToTop } from "vanilla-back-to-top";
import { useMediaQuery } from "react-responsive";

import ProjectCardDesktop from "../../components/project-card-desktop/project-card-desktop.component";
import ProjectCardMobile from "../../components/project-card-mobile/project-card-mobile.component";
import SocialStickyBars from "../../components/social-sticky-bars/social-sticky-bars.component";

import "./projectspage.styles.scss";

import PROJECTS_DATA from "./projects.data";

const Projects = () => {
	addBackToTop({
		backgroundColor: "#0f4c81",
	});

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

	const projects = PROJECTS_DATA.sort((a, b) => b.id - a.id);

	return (
		<div className="projects-container">
			<h1
				id="project-heading"
				className="text-center text-primary my-4 pb-2 position-relative"
			>
				my works
			</h1>
			<div className="container mb-5">
				<div className="row my-5 d-block align-items-center justify-content-center">
					{isTabletOrMobile
						? projects.map((project) => (
								<ProjectCardMobile project={project} key={project.id} />
						  ))
						: projects.map((project) => (
								<ProjectCardDesktop project={project} key={project.id} />
						  ))}
				</div>
			</div>
			<SocialStickyBars />
		</div>
	);
};

export default Projects;
