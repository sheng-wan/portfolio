import "./social-bar.styles.scss";

const SocialBar = ({ item }) => {
	const { name, image, color, link } = item;
	return (
		<div className={`icon-bar p-2 text-right bg-${color}`}>
			<a
				className="bar-title text-white"
				href={link}
				target="_blank"
				rel="noopener noreferrer"
			>
				{name}
				<div id="icon-img" className="bg-white d-inline-block text-center">
					<img src={image} alt="" />
				</div>
			</a>
		</div>
	);
};

export default SocialBar;
