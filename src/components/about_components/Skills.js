import React from 'react';
import './Skills.scss';
import html from '../../images/skills_icon/HTML.png';
import mean from '../../images/skills_icon/MEAN.png';
import python from '../../images/skills_icon/python.png';
import javascript from '../../images/skills_icon/JavaScript.png';
import django from '../../images/skills_icon/django.png';
import css from '../../images/skills_icon/CSS.png';

const Skills = () => {
	return (
		<div className='skills-container'>
			<div className='skills-header'>
				<h1 className='skills-h1'>my skills</h1>
			</div>
			<div className='skills-wrapper'>
				<div className='skills-box'>
					<div className='skills-title'>
						<div className='skills-img'>
							<img className='skills-icon' src={html} alt='' />
						</div>
						<h5 className='skills-h5'>HTML 5</h5>
					</div>
					{/* <p className='skills-p'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p> */}
				</div>
				<div className='skills-box'>
					<div className='skills-title'>
						<div className='skills-img'>
							<img className='skills-icon' src={mean} alt='' />
						</div>
						<h5 className='skills-h5'>MEAN</h5>
					</div>
					{/* <p className='skills-p'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p> */}
				</div>
				<div className='skills-box'>
					<div className='skills-title'>
						<div className='skills-img'>
							<img className='skills-icon' src={javascript} alt='' />
						</div>
						<h5 className='skills-h5'>JavaScript</h5>
					</div>
					{/* <p className='skills-p'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p> */}
				</div>
				<div className='skills-box'>
					<div className='skills-title'>
						<div className='skills-img'>
							<img className='skills-icon' src={python} alt='' />
						</div>
						<h5 className='skills-h5'>Python</h5>
					</div>
					{/* <p className='skills-p'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p> */}
				</div>
				<div className='skills-box'>
					<div className='skills-title'>
						<div className='skills-img'>
							<img className='skills-icon' src={django} alt='' />
						</div>
						<h5 className='skills-h5'>Django</h5>
					</div>
					{/* <p className='skills-p'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p> */}
				</div>
				<div className='skills-box'>
					<div className='skills-title'>
						<div className='skills-img'>
							<img className='skills-icon' src={css} alt='' />
						</div>
						<h5 className='skills-h5'>CSS</h5>
					</div>
					{/* <p className='skills-p'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p> */}
				</div>
			</div>
		</div>
	);
};

export default Skills;
