import React from "react";
import { useHistory } from "react-router-dom";
import placeholder from "../../../images/logo-yellow.png";
import "./Intro.scss";

const Intro = () => {
	let history = useHistory();

	function handleClick() {
		history.push("/projects");
	}
	return (
		<>
			<div className="container mb-5">
				<h1
					id="about-me-heading"
					className="text-center text-primary my-4 pb-2 position-relative"
				>
					about me
				</h1>
				<div class="row my-4">
					<div className="col-md-4 pb-3 py-sm-0">
						<img
							className="img-fluid img-thumbnail"
							src={placeholder}
							alt=""
						></img>
						<div className="row mt-4">
							<button
								onClick={handleClick}
								// to="/#/projects"
								className="d-lg-none col-lg-12 about-btn btn btn-lg btn-outline-primary mx-4 mb-2"
							>
								my works
							</button>
							<a
								href="https://1drv.ms/b/s!AlxdLtWJy59D70p0ILRlZPCV35Nr?e=9cSA0C"
								className="d-lg-none col-lg-12 about-btn btn btn-lg btn-secondary mx-4 mb-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								my resume
							</a>
							<a
								href="#timeline-heading"
								className="d-lg-none col-lg-12 about-btn btn btn-lg btn-primary mx-4 mb-2"
							>
								experience
							</a>
						</div>
					</div>
					<div className="col-md-8">
						<div>
							<p className="lead">
								Greetings, I am Wan Sheng, a self-efficient Full-Stack Web
								Developer, specializing in JavaScript, React.js, Python, Django,
								CSS and more.
								<span> </span>
								<span className="text-primary font-weight-bold">
									Initialtive, Quick Learner, and Working Ethic
								</span>
								<span> </span>
								are my labels.
							</p>
							<p className="lead">
								When I first met computer as a little kid, I was blown away. I
								wondered when could I do something like these. Now that dream
								come true. Although most of my past experience are business
								operation and eCommerce related, that doesn't mean I am less
								qualified as a software developer. In contrast, it prepares me
								to be a better one since I understand more what the clients see
								and think. If your team need talents and energy, feel free to
								reach me out. I am willing to take any challenges.
							</p>
							<div id="btn-row" className="row ">
								<a
									id="about-btn about-btn-main"
									href="/projects"
									className="col-xl-3 col-lg-12 btn btn-lg btn-outline-primary mx-2 mb-2"
								>
									my works
								</a>
								<a
									id="about-btn about-btn-main"
									href="https://1drv.ms/b/s!AlxdLtWJy59D70p0ILRlZPCV35Nr?e=9cSA0C"
									className="col-xl-3 col-lg-12 btn btn-lg btn-secondary mx-2 mb-2"
									target="_blank"
									rel="noopener noreferrer"
								>
									my resume
								</a>
								<a
									id="about-btn about-btn-main"
									href="#timeline-heading"
									className="col-xl-3 col-lg-12 btn btn-lg btn-primary mx-2 mb-2"
								>
									experience
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
