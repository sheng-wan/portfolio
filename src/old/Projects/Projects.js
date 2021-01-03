import React from "react";
import ProjectCardDesktop from "./projects_components/ProjectCardDesktop";
import ProjectCardMobile from "./projects_components/ProjectCardMobile";
import { addBackToTop } from "vanilla-back-to-top";
import { useMediaQuery } from "react-responsive";

import "./Project.scss";
import SocialStickyBars from "../social-sticky-bars/social-sticky-bars.component";

const Projects = () => {
	addBackToTop({
		backgroundColor: "#0f4c81",
	});

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

	return (
		<div className="projects-container">
			<h1
				id="project-heading"
				className="text-center text-primary my-4 pb-2 position-relative"
			>
				my works{" "}
			</h1>
			{isTabletOrMobile ? <ProjectCardMobile /> : <ProjectCardDesktop />}
			<SocialStickyBars />
		</div>
	);
};

export default Projects;
