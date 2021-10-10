import "./project-card-mobile.styles.scss";

const ProjectCardMobile = ({ project }) => {
	const { title, desc, tech, github, link, thumbnail } = project;
	return (
		<div className="container mb-5">
			<div id="project-card-mobile" className="mx-auto position-relative my-5">
				<div id="project-banner-mobile" className="position-absolute">
					<img
						id="project-banner-img-mobile"
						className="position-absolute"
						src={thumbnail}
						alt=""
					/>
				</div>
				<div id="project-content-mobile" className="p-2 position-absolute">
					<h2
						id="project-content-title-mobile"
						className="text-primary mt-2 p-3"
					>
						{title}
					</h2>
					<p id="project-content-desc-mobile" className="text-dark px-3">
						{desc}
					</p>
					<h5 id="project-tech-mobile" className="text-warning mt-3 px-3">
						Technologies
					</h5>
					<div className="mt-3 px-3">
						<div id="project-tech-icons-mobile" className="">
							{tech.map((item) => (
								<div className="d-inline" key={item.id}>
									<img
										src={item.imageUrl}
										alt=""
										id="tech-icon-img-mobile"
										className="mr-2 mb-2"
										data-toggle="tooltip"
										data-placement="top"
										title="item.title"
									/>
								</div>
							))}
						</div>
						<div id="project-buttons-mobile" className="mt-3">
							{github === "" ? (
								<div />
							) : (
								<a
									id="project-links-mobile"
									className="btn btn-outline-primary mr-3"
									href={github}
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
							)}
							{link === "" ? (
								<div />
							) : (
								<a
									id="project-links-mobile"
									className="btn btn-secondary"
									href={link}
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
		</div>
	);
};

export default ProjectCardMobile;
