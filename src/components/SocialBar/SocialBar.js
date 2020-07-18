import React from 'react';
import './SocialBar.scss';

import email3 from '../../images/social-icons/email3.png';
import linkedin from '../../images/social-icons/linkedin.png';
import github from '../../images/social-icons/github.png';

const SocialBar = () => {
	return (
		<div
			id='sticky-icon-bars'
			className='position-fixed d-flex flex-column justify-content-center'
		>
			<div id='email-bar' className='icon-bar p-2 text-right bg-secondary'>
				<a
					className='bar-title text-white'
					href='mailto:wanshengdev@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					email
				</a>
				<div id='icon-img' className='bg-white d-inline-block  text-center'>
					<img src={email3} alt='' />
				</div>
			</div>

			<div id='linkedin-bar' className='icon-bar p-2 text-right bg-primary'>
				<a
					className='bar-title text-white'
					href='https://www.linkedin.com/in/wan-sheng-753852182/'
					target='_blank'
					rel='noopener noreferrer'
				>
					linkedin
				</a>
				<div id='icon-img' className='bg-white d-inline-block  text-center'>
					<img src={linkedin} alt='' />
				</div>
			</div>

			<div id='github-bar' className='icon-bar p-2 text-right bg-dark'>
				<a
					className='bar-title text-white'
					href='https://github.com/wansheng-dev'
					target='_blank'
					rel='noopener noreferrer'
				>
					github
				</a>
				<div id='icon-img' className='bg-white d-inline-block  text-center'>
					<img src={github} alt='' />
				</div>
			</div>
		</div>
	);
};

export default SocialBar;
