import React from 'react';
import './ProjectCardDesktop.scss';

import carss from '../../../images/project-covers/carss.webp';
import wmchat from '../../../images/project-covers/wmchat.webp';
import downosaur from '../../../images/project-covers/downasaur.webp';

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
import express from '../../../images/skills-icons/expressjs.png';
import socketio from '../../../images/skills-icons/socketio.png';
import java from '../../../images/skills-icons/java.png';
import heroku from '../../../images/skills-icons/heroku.png';
import netlify from '../../../images/skills-icons/netlify.png';

const ProjectCardDesktop = () => (
	<div className='container mb-5'>
		<div className='row my-5 d-block align-items-center justify-content-center'>
			<div id='project-card-desktop' className='mx-auto position-relative'>
				<div id='project-banner-desktop' className='position-absolute'>
					<img
						id='project-banner-img-desktop'
						className='position-absolute'
						src={carss}
						alt=''
					/>
				</div>{' '}
				<div id='project-content-desktop' className='p-2 position-absolute'>
					<h3
						id='project-content-title-desktop'
						className='text-primary my-3 pt-2'
					>
						Carss - Online Auto Dealer{' '}
					</h3>{' '}
					<p id='project-content-desc-desktop' className='text-dark'>
						Carss is an online auto dealer website where users can search and
						browse car listing and contact the sales advisor for test drives,
						and the company can manage its employees, car listings, users,
						messages through an admin system.The project is written in Python
						3.7 and Django 3.0.{' '}
					</p>{' '}
					<h5
						id='project-tech-desktop'
						className='project-tech text-warning mt-3'
					>
						{' '}
						Technologies{' '}
					</h5>{' '}
					<div class='row'>
						<div id='project-tech-icons-desktop' className='col-8'>
							<div className='d-inline'>
								<img
									src={python}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Python 3'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={django}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Django 3'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={html}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='HTML 5'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={javascript}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='JavaScript'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={css3}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='CSS 3'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={bootstrap}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Bootstrap 4'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={sass2}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Sass'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={nginx}
									alt=''
									id='tech-icon-img-hidden-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Nginx'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={gunicorn}
									alt=''
									id='tech-icon-img-hidden-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Gunicorn'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={aws}
									alt=''
									id='tech-icon-img-hidden-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='AWS'
								/>
							</div>{' '}
						</div>{' '}
						<div
							id='project-buttons-desktop'
							className='col ml-auto d-flex pr-5'
						>
							<a
								id='project-links-desktop'
								className='btn btn-outline-primary ml-auto mr-3 align-self-end'
								href='https://github.com/wansheng-dev/Project_Carss_Online_Auto_Dealer'
								target='_blank'
								rel='noopener noreferrer'
							>
								GitHub{' '}
							</a>{' '}
							<a
								id='project-links-desktop'
								className='btn btn-secondary mr-2 align-self-end'
								href='http://18.144.133.255/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Live Link{' '}
							</a>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</div>
		<div className='row my-5 d-block align-items-center justify-content-center'>
			<div
				id='project-card-desktop'
				className='project-card mx-auto position-relative'
			>
				<div id='project-banner-desktop' className='position-absolute'>
					<img
						id='project-banner-img-desktop'
						className='position-absolute'
						src={wmchat}
						alt=''
					/>
				</div>{' '}
				<div id='project-content-desktop' className='p-2 position-absolute'>
					<h3
						id='project-content-title-desktop'
						className='text-primary my-3 pt-2'
					>
						WMChat - Realtime Chatting{' '}
					</h3>{' '}
					<p id='project-content-desc-desktop' className='text-dark'>
						WMChat is a realtime chatting room application.The project is built
						with React.js on the front end, and Node.js, Express.js(and Cors),
						Socket.io on the back end.With Socket.io, a user can chat with other
						users on the same channel in realtime.The app also features a user -
						friendly interface, user uniqueness check, join / leave broadcast,
						and Emoji.{' '}
					</p>{' '}
					<h5 id='project-tech-desktop' className='text-warning mt-3'>
						{' '}
						Technologies{' '}
					</h5>{' '}
					<div class='row'>
						<div id='project-tech-icons-desktop' className='col-7'>
							<div className='d-inline'>
								<img
									src={react}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='React.js'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={node}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Node.js'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={express}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Express.js'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={socketio}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Socket.io'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={css3}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='CSS 3'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={heroku}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Heroku'
								/>
							</div>{' '}
							<div className='d-inline'>
								<img
									src={netlify}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Netlify'
								/>
							</div>{' '}
						</div>{' '}
						<div
							id='project-buttons-desktop'
							className='col ml-auto d-flex pr-5'
						>
							<a
								id='project-links-desktop'
								className='btn btn-outline-primary ml-auto mr-3 align-self-end'
								href='https://github.com/wansheng-dev/WMChat_2'
								target='_blank'
								rel='noopener noreferrer'
							>
								GitHub{' '}
							</a>{' '}
							<a
								id='project-links-desktop'
								className='btn btn-secondary mr-2 align-self-end'
								href='#'
								target='_blank'
								rel='noopener noreferrer'
							>
								Live Link{' '}
							</a>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</div>
		<div className='row my-5 d-block align-items-center justify-content-center'>
			<div
				id='project-card-desktop'
				className='project-card mx-auto position-relative'
			>
				<div id='project-banner-desktop' className='position-absolute'>
					<img
						id='project-banner-img-desktop'
						className='position-absolute'
						src={downosaur}
						alt=''
					/>
				</div>{' '}
				<div id='project-content-desktop' className='p-2 position-absolute'>
					<h3
						id='project-content-title-desktop'
						className='text-primary my-3 pt-2'
					>
						#notmydownasaur - Game{' '}
					</h3>{' '}
					<p id='project-content-desc-desktop' className='text-dark'>
						#notmydownassaur is a pure Java application, inspired by the famous
						chrome downassaur game. Using Object-Oriented-Programming, each
						character, enemy, and landscape block is an object. Combining with
						the gravitational system, scoring algorithm and randomly generated
						enemies and landscapes, it is a complete mini-game.{' '}
					</p>{' '}
					<h5 id='project-tech-desktop' className='text-warning mt-3'>
						{' '}
						Technologies{' '}
					</h5>{' '}
					<div class='row'>
						<div id='project-tech-icons-desktop' className='col-7'>
							<div className='d-inline'>
								<img
									src={java}
									alt=''
									id='tech-icon-img-desktop'
									className='mr-2'
									data-toggle='tooltip'
									data-placement='top'
									title='Java'
								/>
							</div>{' '}
						</div>{' '}
						<div
							id='project-buttons-desktop'
							className='col ml-auto d-flex pr-5'
						>
							<a
								id='project-links-desktop'
								className='btn btn-outline-primary ml-auto mr-2 align-self-end'
								href='https://github.com/wansheng-dev/Java-Game-notmydownasaur'
								target='_blank'
								rel='noopener noreferrer'
							>
								GitHub{' '}
							</a>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</div>{' '}
	</div>
);

export default ProjectCardDesktop;
