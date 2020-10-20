import React from "react";
import Intro from "./about_components/Intro";
import Timeline from "./about_components/Timeline";
import Skills from "./about_components/Skills";
import { addBackToTop } from "vanilla-back-to-top";
import SocialBar from "../SocialBar/SocialBar";

const About = () => {
	addBackToTop({
		backgroundColor: "#0f4c81",
	});

	return (
		<div className="container my-3">
			<SocialBar />
			<Intro />
			<Skills />
			<Timeline />
		</div>
	);
};

export default About;
