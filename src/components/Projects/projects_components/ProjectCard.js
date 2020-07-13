import React from 'react';
import './ProjectCard.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';

import stock from '../../../images/newyork.webp';
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

const ProjectCard = () => (
	<div className='container mb-5'>
		<h1 className='h1-project text-center text-primary my-4 pb-2 position-relative'>
			my works
		</h1>

		<div className='row my-5 d-block align-items-center justify-content-center'>
			<div className='project-card mx-auto position-relative'>
				<div className='project-img position-absolute'>
					<img
						className='project-thumbnail position-absolute'
						src={stock}
						alt=''
					/>
				</div>
				<div className='project-content p-2 position-absolute'>
					<h3 className='project-title text-primary my-3 pt-2'>
						Carss - Online Auto Dealer
					</h3>
					<p className='project-desc pr-3'>
						Carss is an online auto dealer website where users can search and
						browse car listing and contact the sales advisor for test drives,
						and the company can manage its employees, car listings, users,
						messages through an admin system. The project is written in Python
						3.7 and Django 3.0.
					</p>
					<h5 className='project-tech text-warning mt-3'>Technologies</h5>
					<div class='row'>
						<div className='project-tech-icons col-7'>
							<div className='d-inline'>
								<img src={python} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={django} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={html} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={javascript} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={css3} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={bootstrap} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={sass2} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={nginx} alt='' className='tech-icon-img-hidden mr-2' />
							</div>
							<div className='d-inline'>
								<img
									src={gunicorn}
									alt=''
									className='tech-icon-img-hidden mr-2'
								/>
							</div>
							<div className='d-inline'>
								<img src={aws} alt='' className='tech-icon-img-hidden mr-2' />
							</div>
						</div>
						<div className='project-buttons col-4 ml-auto d-flex pr-5'>
							<a
								className='project-links btn btn-outline-primary ml-auto mr-3 align-self-end'
								href='#'
							>
								{/* <FontAwesomeIcon icon={faGithub} /> */}
								GitHub
							</a>
							<a
								className='project-links btn btn-outline-primary mr-5 align-self-end'
								href='#'
							>
								Live Link
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className='row my-5 d-block align-items-center justify-content-center'>
			<div className='project-card mx-auto position-relative'>
				<div className='project-img position-absolute'>
					<img
						className='project-thumbnail position-absolute'
						src={wmchat}
						alt=''
					/>
				</div>
				<div className='project-content p-2 position-absolute'>
					<h3 className='project-title text-primary my-3 pt-2'>
						WMChat - Chatting App
					</h3>
					<p className='project-desc pr-3'>
						Carss is an online auto dealer website where users can search and
						browse car listing and contact the sales advisor for test drives,
						and the company can manage its employees, car listings, users,
						messages through an admin system. The project is written in Python
						3.7 and Django 3.0.
					</p>
					<h5 className='project-tech text-warning mt-3'>Technologies</h5>
					<div class='row'>
						<div className='project-tech-icons col-7'>
							<div className='d-inline'>
								<img src={react} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={node} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={express} alt='' className='tech-icon-img mr-2' />
							</div>
							<div className='d-inline'>
								<img src={socketio} alt='' className='tech-icon-img mr-2' />
							</div>
						</div>
						<div className='project-buttons col-4 ml-auto d-flex pr-5'>
							<a
								className='project-links btn btn-outline-primary ml-auto mr-3 align-self-end'
								href='#'
							>
								{/* <FontAwesomeIcon icon={faGithub} /> */}
								GitHub
							</a>
							<a
								className='project-links btn btn-outline-primary mr-5 align-self-end'
								href='#'
							>
								Live Link
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className='row my-5 d-block align-items-center justify-content-center'>
			<div className='project-card mx-auto position-relative'>
				<div className='project-img position-absolute'>
					<img
						className='project-thumbnail position-absolute'
						src={downosaur}
						alt=''
					/>
				</div>
				<div className='project-content p-2 position-absolute'>
					<h3 className='project-title text-primary my-3 pt-2'>
						Downasaur - Java Game
					</h3>
					<p className='project-desc pr-3'>
						Carss is an online auto dealer website where users can search and
						browse car listing and contact the sales advisor for test drives,
						and the company can manage its employees, car listings, users,
						messages through an admin system. The project is written in Python
						3.7 and Django 3.0.
					</p>
					<h5 className='project-tech text-warning mt-3'>Technologies</h5>
					<div class='row'>
						<div className='project-tech-icons col-7'>
							<div className='d-inline'>
								<img src={java} alt='' className='tech-icon-img mr-2' />
							</div>
						</div>
						<div className='project-buttons col-4 ml-auto d-flex pr-5'>
							<a
								className='project-links btn btn-outline-primary ml-auto mr-5 align-self-end'
								href='#'
							>
								Live Link
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ProjectCard;
