import React from "react";
import { addBackToTop } from "vanilla-back-to-top";

import SocialStickyBars from "../../components/social-sticky-bars/social-sticky-bars.component";
import Intro from "../../components/intro/intro.component";
import Skills from "../../components/skills/skills.component";
import Timeline from "../../components/timeline/timeline.component";

const About = () => {
	addBackToTop({
		backgroundColor: "#0f4c81",
	});

	return (
		<div className="container my-3">
			<SocialStickyBars />
			<Intro />
			<Skills />
			<Timeline />
		</div>
	);
};

export default About;
