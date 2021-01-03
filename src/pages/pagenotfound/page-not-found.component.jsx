import React from "react";
import Particles from "react-tsparticles";
import Typical from "react-typical";
import "./page-not-found.styles.scss";

import nyancat from "../../assets/images/nyancat.gif";
import rainbow from "../../assets/images/rainbow2.gif";

const PageNotFound = () => {
	return (
		<div
			id="pnf-container"
			className="container-fluid px-0 position-absolute bg-primary h-100"
		>
			<div
				id="pnf-content"
				className="text-white text-center position-relative"
			>
				<div>
					<h1>CODE 404:</h1>
					<Typical
						className="h2"
						loop={Infinity}
						wrapper="b"
						steps={["You have gone above and beyond", 3000]}
					/>
				</div>
				<div id="long-cat" className="p-0 position-absolute">
					<img id="rainbow" className="" src={rainbow} alt="rainbow" />
					<img id="nyancat" className="" src={nyancat} alt="nyancat" />
				</div>
			</div>
			<Particles
				id="tsparticles"
				params={{
					background: {
						repeat: "no-repeat",
						size: "cover",
					},
					backgroundMask: {
						cover: {
							color: {
								value: "#fff",
							},
							opacity: 1,
						},
						enable: false,
					},
					detectRetina: true,
					fpsLimit: 30,
					infection: {
						cure: false,
						delay: 0,
						enable: false,
						infections: 0,
						stages: [],
					},
					interactivity: {
						detectsOn: "canvas",
						events: {
							onClick: {
								enable: true,
								mode: "repulse",
							},
							onDiv: {
								ids: [],
								enable: false,
								mode: [],
								type: "circle",
							},
							onHover: {
								enable: false,
								mode: "grab",
								parallax: {
									enable: false,
									force: 2,
									smooth: 10,
								},
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 8,
								size: 40,
							},
							connect: {
								distance: 80,
								links: {
									opacity: 0.5,
								},
								radius: 60,
							},
							grab: {
								distance: 200,
								links: {
									opacity: 1,
								},
							},
							push: {
								quantity: 4,
							},
							remove: {
								quantity: 2,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
								speed: 1,
							},
							slow: {
								factor: 3,
								radius: 200,
							},
						},
					},
					particles: {
						collisions: {
							enable: false,
							mode: "bounce",
						},
						color: {
							value: "#ffffff",
							animation: {
								enable: false,
								speed: 1,
								sync: true,
							},
						},
						links: {
							blink: false,
							color: {
								value: "#ffffff",
							},
							consent: false,
							distance: 150,
							enable: false,
							opacity: 0.4,
							shadow: {
								blur: 5,
								color: {
									value: "#00ff00ff",
								},
								enable: false,
							},
							triangles: {
								enable: false,
							},
							width: 1,
							warp: false,
						},
						move: {
							angle: 90,
							attract: {
								enable: false,
								rotate: {
									x: 600,
									y: 1200,
								},
							},
							direction: "left",
							enable: true,
							noise: {
								delay: {
									random: {
										enable: false,
										minimumValue: 0,
									},
									value: 0,
								},
								enable: false,
							},
							outMode: "out",
							random: false,
							speed: 6,
							straight: true,
							trail: {
								enable: false,
								length: 10,
								fillColor: {
									value: "#000000",
								},
							},
							vibrate: false,
							warp: false,
						},
						number: {
							density: {
								enable: false,
								area: 800,
								factor: 1000,
							},
							limit: 0,
							value: 100,
						},
						opacity: {
							animation: {
								enable: false,
								minimumValue: 0.1,
								speed: 1,
								sync: false,
							},
							random: {
								enable: false,
								minimumValue: 1,
							},
							value: 0.5,
						},
						rotate: {
							animation: {
								enable: false,
								speed: 0,
								sync: false,
							},
							direction: "clockwise",
							random: false,
							value: 0,
						},
						shadow: {
							blur: 0,
							color: {
								value: "#000000",
							},
							enable: false,
							offset: {
								x: 0,
								y: 0,
							},
						},
						shape: {
							options: {
								polygon: {
									nb_sides: 5,
								},
								star: {
									nb_sides: 5,
								},
							},
							type: "star",
						},
						size: {
							animation: {
								destroy: "none",
								enable: false,
								minimumValue: 0.1,
								speed: 40,
								startValue: "max",
								sync: false,
							},
							random: {
								enable: true,
								minimumValue: 1,
							},
							value: 4,
						},
						stroke: {
							color: {
								value: "#000000",
							},
							width: 0,
							opacity: 1,
						},
						twinkle: {
							lines: {
								enable: false,
								frequency: 0.05,
								opacity: 1,
							},
							particles: {
								enable: false,
								frequency: 0.05,
								opacity: 1,
							},
						},
					},
					pauseOnBlur: true,
				}}
			/>
		</div>
	);
};

export default PageNotFound;
