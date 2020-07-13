import React from 'react';
import './Skills.scss';
import apache2 from '../../../images/skills-icons/apache2.png';
import aws from '../../../images/skills-icons/aws.png';
import bootstrap from '../../../images/skills-icons/bootstrap.png';
import css3 from '../../../images/skills-icons/css3.png';
import django from '../../../images/skills-icons/django.png';
import git from '../../../images/skills-icons/git.png';
import gunicorn from '../../../images/skills-icons/gunicorn.png';
import html from '../../../images/skills-icons/html5.png';
import java from '../../../images/skills-icons/java.png';
import javascript from '../../../images/skills-icons/javascript.png';
import jquery from '../../../images/skills-icons/jquery.png';
import mongodb from '../../../images/skills-icons/mongodb.png';
import mysql from '../../../images/skills-icons/mysql.png';
import nginx from '../../../images/skills-icons/nginx.png';
import node from '../../../images/skills-icons/node.png';
import npm from '../../../images/skills-icons/npm.png';
import postgresql from '../../../images/skills-icons/postgresql.png';
import python from '../../../images/skills-icons/python.png';
import react from '../../../images/skills-icons/react.png';
import sass from '../../../images/skills-icons/sass.png';
import ubuntu from '../../../images/skills-icons/ubuntu.png';
import express from '../../../images/skills-icons/express.png';
import socketio from '../../../images/skills-icons/socketio.png';

const Skills = () => {
	return (
		<div className='container mb-5'>
			<h1
				id='skills-heading'
				className='text-center text-primary mb-5 pb-2 position-relative'
			>
				{' '}
				my skills{' '}
			</h1>

			<div className='row mb-4 d-inline-flex'>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={apache2} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Apache2
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={aws} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						AWS
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={bootstrap} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Bootstrap4
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={css3} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						CSS3
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={django} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Django
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={git} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Git
					</h5>
				</div>

				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={gunicorn} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Gunicorn
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={html} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						HTML5
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={java} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Java
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={javascript} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Javascript
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={jquery} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						jQuery
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={mongodb} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						MongoDB
					</h5>
				</div>

				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={mysql} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						MySQL
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={nginx} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Nginx
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={node} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Node.js
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={postgresql} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						PostgreSQL
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={python} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Python
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={react} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						React.js
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={sass} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Sass
					</h5>
				</div>

				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={ubuntu} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						ubuntu
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={npm} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						NPM
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={express} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Express.js
					</h5>
				</div>
				<div id='skills-box'>
					<div
						id='skills-img-box'
						className='mx-auto d-flex align-items-center justify-content-center'
					>
						<img src={socketio} alt='' id='skills-img' />
					</div>
					<h5 className='text-center mt-2 pb-2 d-flex flex-column align-items-center position-relative'>
						Socket.io
					</h5>
				</div>
			</div>
		</div>
	);
};

export default Skills;
