import React from "react";
import SKILLS_DATA from "./skills.data";
import "./skills.styles.scss";
import SkillItem from "../skill-item/skill-item.component";

const Skills = () => {
	const skills = SKILLS_DATA;

	return (
		<div className="container mb-5">
			<h1
				id="skills-heading"
				className="text-center text-primary mb-5 pb-2 position-relative"
			>
				my skills
			</h1>
			<div className="row mb-4 d-inline-flex justify-content-center">
				{skills.map((skill) => (
					<SkillItem skill={skill} key={skill.id} />
				))}
			</div>
		</div>
	);
};

export default Skills;
