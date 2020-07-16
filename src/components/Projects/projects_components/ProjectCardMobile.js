import React from 'react';
import './ProjectCardMobile.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';

import stock from '../../../images/newyork.webp';
// import stock from '../../../images/2.png';
import wmchat from '../../../images/project-thumbnails/wmchat.png';
import downosaur from '../../../images/project-thumbnails/downosaur.webp';

import python from '../../../images/skills-icons/python.png';
import django from '../../../images/skills-icons/django.png';
import html from '../../../images/skills-icons/html5.png';
import javascript from '../../../images/skills-icons/javascript.png';
import css3 from '../../../images/skills-icons/css3.png';
import bootstrap from '../../../images/skills-icons/bootstrap.png';
import sass2 from '../../../images/skills-icons/sass-2.png';
import nginx from '../../../images/skills-icons/nginx.png';
import gunicorn from '../../../images/skills-icons/gunicorn.png';
import aws from '../../../images/skills-icons/aws.png';
import react from '../../../images/skills-icons/react.png';
import node from '../../../images/skills-icons/node.png';
import express from '../../../images/skills-icons/express.png';
import socketio from '../../../images/skills-icons/socketio.png';
import java from '../../../images/skills-icons/java.png';

const ProjectCardMobile = () => (
	<div className='container mb-5'>
		<div id='project-card-mobile' className='mx-auto position-relative my-5'>
			<div id='project-banner-mobile' className='position-absolute'>
				<img
					id='project-banner-img-mobile'
					className='position-absolute'
					src={stock}
					alt=''
				/>
			</div>
			<div id='project-content-mobile' className='p-2 position-absolute'>
				<h2 id='project-content-title-mobile' className='text-primary mt-2 p-3'>
					Carss - Online Auto Dealer
				</h2>
				<p id='project-content-desc-mobile' className='text-dark px-3'>
					Carss is an online auto dealer website where users can search and
					browse car listing and contact the sales advisor for test drives, and
					the company can manage its employees, car listings, users, messages
					through an admin system.The project is written in Python 3.7 and
					Django 3.0.
				</p>
				<h5 id='project-tech-mobile' className='text-warning mt-3 px-3'>
					{' '}
					Technologies{' '}
				</h5>{' '}
				<div class='mt-3 px-3'>
					<div id='project-tech-icons-mobile' className=''>
						<div className='d-inline'>
							<img
								src={python}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={django}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={html}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={javascript}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={css3}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={bootstrap}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={sass2}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={nginx}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={gunicorn}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={aws}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
					</div>{' '}
					<div id='project-buttons-mobile' className='mt-3'>
						<a
							id='project-links-mobile'
							className='btn btn-outline-primary mr-3'
							href='https://github.com/wansheng-dev/Project_Carss_Online_Auto_Dealer'
							target='_blank'
							rel='noopener noreferrer'
						>
							{/* <FontAwesomeIcon icon={faGithub} /> */}
							GitHub{' '}
						</a>{' '}
						<a
							id='project-links-mobile'
							className='btn btn-secondary'
							href='http://18.144.133.255/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live Link{' '}
						</a>{' '}
					</div>
				</div>
			</div>
		</div>

		<div id='project-card-mobile' className='mx-auto position-relative my-5'>
			<div id='project-banner-mobile' className='position-absolute'>
				<img
					id='project-banner-img-mobile'
					className='position-absolute'
					src={wmchat}
					alt=''
				/>
			</div>
			<div id='project-content-mobile' className='p-2 position-absolute'>
				<h2 id='project-content-title-mobile' className='text-primary mt-2 p-3'>
					WMChat - Realtime Chatting
				</h2>
				<p id='project-content-desc-mobile' className='text-dark px-3'>
					WMChat is a realtime chatting room application.The project is built
					with React.js on the front end, and Node.js, Express.js(and Cors),
					Socket.io on the back end.With Socket.io, a user can chat with other
					users on the same channel in realtime.The app also features a user -
					friendly interface, user uniqueness check, join / leave broadcast, and
					Emoji.
				</p>
				<h5 id='project-tech-mobile' className='text-warning mt-3 px-3'>
					{' '}
					Technologies{' '}
				</h5>{' '}
				<div class='mt-3 px-3'>
					<div id='project-tech-icons-mobile' className=''>
						<div className='d-inline'>
							<img
								src={react}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={node}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={express}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={socketio}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
						<div className='d-inline'>
							<img
								src={css3}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
					</div>{' '}
					<div id='project-buttons-mobile' className='mt-3'>
						<a
							id='project-links-mobile'
							className='btn btn-outline-primary mr-3'
							href='https://github.com/wansheng-dev/WMChat_2'
							target='_blank'
							rel='noopener noreferrer'
						>
							{/* <FontAwesomeIcon icon={faGithub} /> */}
							GitHub{' '}
						</a>{' '}
						<a
							id='project-links-mobile'
							className='btn btn-secondary'
							href='#'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live Link{' '}
						</a>{' '}
					</div>
				</div>
			</div>
		</div>

		<div id='project-card-mobile' className='mx-auto position-relative my-5'>
			<div id='project-banner-mobile' className='position-absolute'>
				<img
					id='project-banner-img-mobile'
					className='position-absolute'
					src={downosaur}
					alt=''
				/>
			</div>
			<div id='project-content-mobile' className='p-2 position-absolute'>
				<h2 id='project-content-title-mobile' className='text-primary mt-2 p-3'>
					#notmydownasaur - Game
				</h2>
				<p id='project-content-desc-mobile' className='text-dark px-3'>
					#notmydownassaur is a pure Java application, inspired by the famous
					chrome downassaur game. Using Object-Oriented-Programming, each
					character, enemy, and landscape block is an object. Combining with the
					gravitational system, scoring algorithm and randomly generated enemies
					and landscapes, it is a complete mini-game.
				</p>
				<h5 id='project-tech-mobile' className='text-warning mt-3 px-3'>
					{' '}
					Technologies{' '}
				</h5>{' '}
				<div class='mt-3 px-3'>
					<div id='project-tech-icons-mobile' className=''>
						<div className='d-inline'>
							<img
								src={java}
								alt=''
								id='tech-icon-img-mobile'
								className='mr-2'
							/>
						</div>{' '}
					</div>{' '}
					<div id='project-buttons-mobile' className='mt-3'>
						<a
							id='project-links-mobile'
							className='btn btn-outline-primary'
							href='https://github.com/wansheng-dev/Java-Game-notmydownasaur'
							target='_blank'
							rel='noopener noreferrer'
						>
							{/* <FontAwesomeIcon icon={faGithub} /> */}
							GitHub{' '}
						</a>{' '}
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ProjectCardMobile;
