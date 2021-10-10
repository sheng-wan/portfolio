import { useHistory } from "react-router-dom";
import placeholder from "../../assets/images/logo-yellow.png";
import "./intro.styles.scss";

const Intro = () => {
	let history = useHistory();

	const handleClick = () => {
		history.push("/projects");
	};

	return (
		<>
			<div className="container mb-5">
				<h1
					id="about-me-heading"
					className="text-center text-primary my-4 pb-2 position-relative"
				>
					about me
				</h1>
				<div className="row my-4">
					<div className="col-md-4 pb-3 py-sm-0">
						<img
							className="img-fluid img-thumbnail"
							src={placeholder}
							alt=""
						></img>
						<div className="row mt-4">
							<button
								onClick={handleClick}
								className="d-lg-none col-lg-12 about-btn btn btn-lg btn-outline-primary mx-4 mb-2"
							>
								my works
							</button>
							<a
								href="https://1drv.ms/b/s!AlxdLtWJy59D-Tb_yQP8BwpL4WHS?e=lifZe0"
								className="d-lg-none col-lg-12 about-btn btn btn-lg btn-secondary mx-4 mb-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								my resume
							</a>
						</div>
					</div>
					<div className="col-md-8">
						<div>
							<p className="lead">
								Greetings, I am Wan Sheng, a self-efficient Software Engineer,
								specializing in React.js, JavaScript, Python, Django, Node.js,
								Sass, and more. I love to develop aesthetic web applications.
								<span> </span>
							</p>
							<p className="lead">
								<span className="text-primary font-weight-bold">
									Initialtive, Quick Learner, and Working Ethic
								</span>
								<span> </span>
								are my labels.
							</p>
							<div id="btn-row" className="row ">
								<button
									id="about-btn about-btn-main"
									onClick={handleClick}
									className="col-xl-3 col-lg-12 btn btn-lg btn-outline-primary mx-2 mb-2"
								>
									my works
								</button>
								<a
									id="about-btn about-btn-main"
									href="https://1drv.ms/b/s!AlxdLtWJy59D-Tb_yQP8BwpL4WHS?e=lifZe0"
									className="col-xl-3 col-lg-12 btn btn-lg btn-secondary mx-2 mb-2"
									target="_blank"
									rel="noopener noreferrer"
								>
									my resume
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
