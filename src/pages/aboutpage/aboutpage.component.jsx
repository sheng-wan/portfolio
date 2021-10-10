import { addBackToTop } from "vanilla-back-to-top";

import SocialStickyBars from "../../components/social-sticky-bars/social-sticky-bars.component";
import Intro from "../../components/intro/intro.component";
import Skills from "../../components/skills/skills.component";

const About = () => {
	addBackToTop({
		backgroundColor: "#0f4c81",
	});

	return (
		<div className="container my-3">
			<SocialStickyBars />
			<Intro />
			<Skills />
		</div>
	);
};

export default About;
