import Particles from "react-tsparticles";

import "./blogpage.styles.scss";

const BlogPage = () => {
	return (
		<div
			id="blog-container"
			className="container-fluid position-absolute bg-primary h-100"
		>
			<h1
				id="blog-title"
				className="text-white display-2 text-center position-relative"
			>
				Coming Soon
			</h1>
			<Particles
				id="tsparticles"
				params={{
					background: {
						color: {
							value: "#0f4c81",
						},
						size: "cover",
						opacity: 1,
					},
					fpsLimit: 60,
					interactivity: {
						detectsOn: "canvas",
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
								speed: 3,
							},
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 6,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: true,
							value: 5,
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
};

export default BlogPage;
