import React from "react";
import "./project-card-desktop.styles.scss";

const ProjectCardDesktop = ({ project, viewport }) => {
	let techShow = project.tech;
	let techHide = [];

	if (techShow.length > 7) {
		techHide = techShow.slice(7);
		techShow = techShow.slice(0, 7);
	}

	return (
		<div id="project-card-desktop" className="mx-auto position-relative mb-5">
			<div id="project-banner-desktop" className="position-absolute">
				<img
					id="project-banner-img-desktop"
					className="position-absolute"
					src={project.thumbnail}
					alt=""
				/>
			</div>
			<div id="project-content-desktop" className="p-2 position-absolute">
				<h3
					id="project-content-title-desktop"
					className="text-primary my-3 pt-2"
				>
					{project.title}
				</h3>
				<p id="project-content-desc-desktop" className="text-dark">
					{project.desc}
				</p>
				<h5
					id="project-tech-desktop"
					className="project-tech text-warning mt-3"
				>
					Technologies
				</h5>
				<div className="row">
					<div id="project-tech-icons-desktop" className="col-8">
						{techShow.map((tech) => (
							<div className="d-inline" key={tech.id}>
								<img
									src={tech.imageUrl}
									alt=""
									id="tech-icon-img-desktop"
									className="mr-2"
									data-toggle="tooltip"
									data-placement="top"
									title={tech.title}
								/>
							</div>
						))}
						{techHide.map((tech) => (
							<div className="d-inline" key={tech.id}>
								<img
									src={tech.imageUrl}
									alt=""
									id="tech-icon-img-hidden-desktop"
									className="mr-2"
									data-toggle="tooltip"
									data-placement="top"
									title={tech.title}
								/>
							</div>
						))}
					</div>
					<div id="project-buttons-desktop" className="col ml-auto d-flex pr-5">
						{project.github === "" ? (
							<div />
						) : (
							<a
								id="project-links-desktop"
								className="btn btn-outline-primary ml-auto mr-3 align-self-end"
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						)}
						{project.link === "" ? (
							<div />
						) : (
							<a
								id="project-links-desktop"
								className="btn btn-secondary mr-2 align-self-end"
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								Live Link
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCardDesktop;
