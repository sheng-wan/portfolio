import React from "react";
import SOCIAL_DATA from "./social.data";
import SocialBar from "../social-bar/social-bar.component";
import "./social-sticky-bars.styles.scss";

const SocialStickyBars = () => {
	const socials = SOCIAL_DATA;

	return (
		<div
			id="sticky-icon-bars"
			className="position-fixed d-flex flex-column justify-content-center"
		>
			{socials.map((item, i) => (
				<SocialBar item={item} key={i} />
			))}
		</div>
	);
};

export default SocialStickyBars;
