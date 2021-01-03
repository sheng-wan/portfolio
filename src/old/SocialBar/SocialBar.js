import React from "react";
import "./SocialBar.scss";

import email3 from "../../assets/images/social-icons/email3.png";
import linkedin from "../../assets/images/social-icons/linkedin.png";
import github from "../../assets/images/social-icons/github.png";

const SocialBar = () => {
	return (
		<div
			id="sticky-icon-bars"
			className="position-fixed d-flex flex-column justify-content-center"
		>
			<div id="email-bar" className="icon-bar p-2 text-right bg-secondary">
				<a
					className="bar-title text-white"
					href="mailto:wanshengdev@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					email
					<div id="icon-img" className="bg-white d-inline-block  text-center">
						<img src={email3} alt="" />
					</div>
				</a>
			</div>

			<div id="linkedin-bar" className="icon-bar p-2 text-right bg-primary">
				<a
					className="bar-title text-white"
					href="https://www.linkedin.com/in/wan-sheng-753852182/"
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedin
					<div id="icon-img" className="bg-white d-inline-block  text-center">
						<img src={linkedin} alt="" />
					</div>
				</a>
			</div>

			<div id="github-bar" className="icon-bar p-2 text-right bg-dark">
				<a
					className="bar-title text-white"
					href="https://github.com/wansheng-dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					github
					<div id="icon-img" className="bg-white d-inline-block  text-center">
						<img src={github} alt="" />
					</div>
				</a>
			</div>
		</div>
	);
};

export default SocialBar;
