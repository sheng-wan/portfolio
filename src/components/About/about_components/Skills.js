import React from "react";
import "./Skills.scss";
import apache2 from "../../../images/skills-icons/apache2.png";
import aws from "../../../images/skills-icons/aws.png";
import bootstrap from "../../../images/skills-icons/bootstrap.png";
import css3 from "../../../images/skills-icons/css3.png";
import django from "../../../images/skills-icons/django.png";
import flask from "../../../images/skills-icons/flask.png";
import git from "../../../images/skills-icons/git.png";
import gunicorn from "../../../images/skills-icons/gunicorn.png";
import heroku from "../../../images/skills-icons/heroku.png";
import html from "../../../images/skills-icons/html5.png";
import java from "../../../images/skills-icons/java.png";
import javascript from "../../../images/skills-icons/javascript.png";
import jquery from "../../../images/skills-icons/jquery.png";
import mongodb from "../../../images/skills-icons/mongodb.png";
import mysql from "../../../images/skills-icons/mysql.png";
import netlify from "../../../images/skills-icons/netlify.png";
import nginx from "../../../images/skills-icons/nginx.png";
import node from "../../../images/skills-icons/node.png";
import pm2 from "../../../images/skills-icons/pm2.png";
import postgresql from "../../../images/skills-icons/postgresql.png";
import python from "../../../images/skills-icons/python.png";
import react from "../../../images/skills-icons/react.png";
import sass from "../../../images/skills-icons/sass.png";
import ubuntu from "../../../images/skills-icons/ubuntu.png";
import express from "../../../images/skills-icons/expressjs.png";
import socketio from "../../../images/skills-icons/socketio.png";
import sqlite from "../../../images/skills-icons/sqlite.png";

const Skills = () => {
	const skills = [
		{
			title: "Apache2",
			icon: apache2,
		},
		{
			title: "AWS",
			icon: aws,
		},
		{
			title: "Bootstrap",
			icon: bootstrap,
		},
		{
			title: "CSS3",
			icon: css3,
		},
		{
			title: "Django",
			icon: django,
		},
		{
			title: "Express.js",
			icon: express,
		},
		{
			title: "Flask",
			icon: flask,
		},
		{
			title: "Git",
			icon: git,
		},
		{
			title: "Gunicorn",
			icon: gunicorn,
		},
		{
			title: "Heroku",
			icon: heroku,
		},
		{
			title: "HTML5",
			icon: html,
		},
		{
			title: "Java",
			icon: java,
		},
		{
			title: "Javascript",
			icon: javascript,
		},
		{
			title: "jQuery",
			icon: jquery,
		},
		{
			title: "MongoDB",
			icon: mongodb,
		},
		{
			title: "MySQL",
			icon: mysql,
		},
		{
			title: "Netlify",
			icon: netlify,
		},
		{
			title: "Nginx",
			icon: nginx,
		},
		{
			title: "Node.js",
			icon: node,
		},
		{
			title: "PM2",
			icon: pm2,
		},
		{
			title: "PostgreSQL",
			icon: postgresql,
		},
		{
			title: "Python",
			icon: python,
		},
		{
			title: "React.js",
			icon: react,
		},
		{
			title: "Sass",
			icon: sass,
		},
		{
			title: "Socketio",
			icon: socketio,
		},
		{
			title: "SQLite",
			icon: sqlite,
		},
		{
			title: "ubuntu",
			icon: ubuntu,
		},
	];

	return (
		<div className="container mb-5">
			<h1
				id="skills-heading"
				className="text-center text-primary mb-5 pb-2 position-relative"
			>
				{" "}
				my skills{" "}
			</h1>
			<div className="row mb-4 d-inline-flex justify-content-center">
				{skills.map((skill, i) => (
					<div id="skills-box" key={i}>
						<div
							id="skills-img-box"
							className="mx-auto d-flex align-items-center justify-content-center"
						>
							<img src={skill.icon} alt="" id="skills-img" />
						</div>
						<h5 className="text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative">
							{skill.title}
						</h5>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
