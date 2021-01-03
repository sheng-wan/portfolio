import downosaur from "../../assets/images/project-covers/downasaur.png";
import wmchat from "../../assets/images/project-covers/wmchat.png";
import carss from "../../assets/images/project-covers/carss.png";
import portfolio from "../../assets/images/project-covers/portfolio.png";
import stormylikes from "../../assets/images/project-covers/stormylikes.png";

import aws from "../../assets/images/skills-icons/aws.png";
import bootstrap from "../../assets/images/skills-icons/bootstrap.png";
import css3 from "../../assets/images/skills-icons/css3.png";
import django from "../../assets/images/skills-icons/django.png";
import express from "../../assets/images/skills-icons/expressjs.png";
import gunicorn from "../../assets/images/skills-icons/gunicorn.png";
import heroku from "../../assets/images/skills-icons/heroku.png";
import html from "../../assets/images/skills-icons/html5.png";
import java from "../../assets/images/skills-icons/java.png";
import javascript from "../../assets/images/skills-icons/javascript.png";
import jquery from "../../assets/images/skills-icons/jquery.png";
import netlify from "../../assets/images/skills-icons/netlify.png";
import nginx from "../../assets/images/skills-icons/nginx.png";
import node from "../../assets/images/skills-icons/node.png";
import python from "../../assets/images/skills-icons/python.png";
import react from "../../assets/images/skills-icons/react.png";
import sass2 from "../../assets/images/skills-icons/sass-2.png";
import socketio from "../../assets/images/skills-icons/socketio.png";

const PROJECTS_DATA = [
	{
		id: 0,
		title: "#notmydownasaur - Game",
		desc:
			"#notmydownassaur is a pure Java application, inspired by the famous chrome downassaur game. Using Object-Oriented-Programming, each character, enemy, and landscape block is an object. Combining with the gravitational system, scoring algorithm and randomly generated enemies and landscapes, it is a complete mini-game.",
		tech: [
			{
				id: 0,
				title: "Java",
				imageUrl: java,
			},
		],
		github: "https://github.com/wansheng-dev/Java-Game-notmydownasaur",
		link: "",
		thumbnail: downosaur,
	},
	{
		id: 1,
		title: "WMChat - Realtime Chatting",
		desc:
			"WMChat is a realtime chatting room application.The project is built with React.js on the front end, and Node.js, Express.js(and Cors), Socket.io on the back end.With Socket.io, a user can chat with other users on the same channel in realtime.The app also features a user - friendly interface, user uniqueness check, join / leave broadcast,and Emoji.",
		tech: [
			{
				id: 0,
				title: "React",
				imageUrl: react,
			},
			{
				id: 1,
				title: "Node.js",
				imageUrl: node,
			},
			{
				id: 2,
				title: "Express.js",
				imageUrl: express,
			},
			{
				id: 3,
				title: "Socket.io",
				imageUrl: socketio,
			},
			{
				id: 4,
				title: "CSS3",
				imageUrl: css3,
			},
			{
				id: 5,
				title: "Heroku",
				imageUrl: heroku,
			},
			{
				id: 6,
				title: "Netlify",
				imageUrl: netlify,
			},
		],
		github: "https://github.com/wansheng-dev/WMChat_2",
		link: "https://5f18fd79d26a8ea11afdf0d3--wmchat-react-app.netlify.app/",
		thumbnail: wmchat,
	},
	{
		id: 2,
		title: "Carss - Online Auto Dealer",
		desc:
			"Carss is an online auto dealer website where users can search and browse car listing and contact the sales advisor for test drives, and the company can manage its employees, car listings, users, messages through an admin system.The project is written in Python 3.7 and Django 3.0.",
		tech: [
			{
				id: 0,
				title: "Python",
				imageUrl: python,
			},
			{
				id: 1,
				title: "Django",
				imageUrl: django,
			},
			{
				id: 2,
				title: "HTML5",
				imageUrl: html,
			},
			{
				id: 3,
				title: "CSS3",
				imageUrl: css3,
			},
			{
				id: 4,
				title: "JavaScript",
				imageUrl: javascript,
			},
			{
				id: 5,
				title: "Bootstrap",
				imageUrl: bootstrap,
			},
			{
				id: 6,
				title: "Sass",
				imageUrl: sass2,
			},
			{
				id: 7,
				title: "Nginx",
				imageUrl: nginx,
			},
			{
				id: 8,
				title: "Gunicorn",
				imageUrl: gunicorn,
			},
			{
				id: 9,
				title: "AWS",
				imageUrl: aws,
			},
		],
		github: "https://github.com/wansheng-dev/Project_Carss_Online_Auto_Dealer",
		link: "http://18.144.133.255/",
		thumbnail: carss,
	},
	{
		id: 3,
		title: "My Portfolio Website",
		desc:
			"I developed my personal portfoilio website from scratch using React.js, the application is styled with Bootstrap and GSAP animation.",
		tech: [
			{
				id: 0,
				title: "React",
				imageUrl: react,
			},
			{
				id: 1,
				title: "JavaScript",
				imageUrl: javascript,
			},
			{
				id: 2,
				title: "Bootstrap",
				imageUrl: bootstrap,
			},
			{
				id: 3,
				title: "Socket.io",
				imageUrl: socketio,
			},
			{
				id: 4,
				title: "Sass",
				imageUrl: sass2,
			},
			{
				id: 5,
				title: "Heroku",
				imageUrl: heroku,
			},
		],
		github: "",
		link: "http://www.wanshengdev.com/",
		thumbnail: portfolio,
	},
	{
		id: 4,
		title: "StormyLikes - Social Media Growth Service",
		desc:
			"StormyLikes is a freelance job for a professional social media growth service website. The application is built with Python & Django, I was responsible for the UI/UX design, full frontend and some backend development.",
		tech: [
			{
				id: 0,
				title: "Python",
				imageUrl: python,
			},
			{
				id: 1,
				title: "Django",
				imageUrl: django,
			},
			{
				id: 2,
				title: "HTML5",
				imageUrl: html,
			},
			{
				id: 3,
				title: "CSS3",
				imageUrl: css3,
			},
			{
				id: 4,
				title: "JavaScript",
				imageUrl: javascript,
			},
			{
				id: 5,
				title: "jQuery",
				imageUrl: jquery,
			},
			{
				id: 6,
				title: "Bootstrap",
				imageUrl: bootstrap,
			},
			{
				id: 7,
				title: "Sass",
				imageUrl: sass2,
			},
		],
		github: "",
		link: "https://stormylikes.com/",
		thumbnail: stormylikes,
	},
];

export default PROJECTS_DATA;
