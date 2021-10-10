import Typical from "react-typical";
import "./homepage.styles.scss";

const HomePage = () => {
	return (
		<div
			id="index-container"
			className="container-fluid position-absolute h-100 d-flex align-items-center"
		>
			<div className="container pl-4 h-25">
				<h1 id="index-title-1" className="text-white">
					Hi, I'm <span className="text-primary">W</span>an
					<span className="text-primary">S</span>heng
				</h1>
				<h4 id="index-title-2" className="text-primary font-weight-bold">
					<Typical steps={["Software Engineer", 1000]} />
				</h4>
			</div>
		</div>
	);
};

export default HomePage;
