import "./skill-item.component.scss";

const SkillItem = ({ skill }) => {
	return (
		<div id="skills-box" key={skill.id}>
			<div
				id="skills-img-box"
				className="mx-auto d-flex align-items-center justify-content-center"
			>
				<img src={skill.imageUrl} alt="" id="skills-img" />
			</div>
			<h5 className="text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative">
				{skill.title}
			</h5>
		</div>
	);
};

export default SkillItem;
