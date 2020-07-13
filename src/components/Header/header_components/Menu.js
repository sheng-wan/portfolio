import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './Menu.scss';

import {
	staggerText,
	staggerReveal,
	// fadeInUp,
	navHoverIn,
	navHoverOff,
	staggerRevealClose,
} from './MenuAnimation';

const Menu = ({ menuState }) => {
	// variables of our dom nodes
	let menuLayer = useRef(null);
	let reveal1 = useRef(null);
	let reveal2 = useRef(null);
	// let cityBackground = useRef(null);
	let nav1 = useRef(null);
	let nav2 = useRef(null);
	let nav3 = useRef(null);

	useEffect(() => {
		if (menuState.clicked === false) {
			staggerRevealClose(reveal2, reveal1);
			gsap.to(menuLayer, {
				duration: 1,
				css: {
					display: 'none',
				},
			});
		} else if (
			menuState.clicked === true ||
			(menuState.clicked === true && menuState.initial === null)
		) {
			gsap.to(menuLayer, {
				duration: 0,
				css: {
					display: 'block',
				},
			});
			gsap.to([reveal1, reveal2], {
				duration: 0,
				opacity: 1,
				height: '100%',
			});
			staggerReveal(reveal1, reveal2);
			// fadeInUp(info);
			staggerText(nav1, nav2, nav3);
		}
	}, [menuState]);

	return (
		<div
			ref={(element) => (menuLayer = element)}
			className='menu-hamburger-menu position-fixed'
		>
			<div
				ref={(element) => (reveal1 = element)}
				className='menu-secondary-background-color  position-fixed'
			></div>{' '}
			<div
				ref={(element) => (reveal2 = element)}
				className='menu-layer position-relative bg-primary'
			>
				<div className='container h-100'>
					<div className='menu-wrapper d-flex align-items-center position-relative'>
						{/* <div className='menu-links d-flex align-self-center'> */}
						<nav className='d-block'>
							<ul className='text-left p-0 m-0 list-unstyled display-1 position-relative'>
								<li className='my-2'>
									<Link
										onMouseEnter={(e) => navHoverIn(e)}
										onMouseOut={(e) => navHoverOff(e)}
										ref={(element) => (nav1 = element)}
										to='/'
									>
										Home{' '}
									</Link>{' '}
								</li>{' '}
								<li className='my-2'>
									<Link
										onMouseEnter={(e) => navHoverIn(e)}
										onMouseOut={(e) => navHoverOff(e)}
										ref={(element) => (nav1 = element)}
										to='/about'
									>
										About{' '}
									</Link>{' '}
								</li>{' '}
								<li className='my-2'>
									<Link
										onMouseEnter={(e) => navHoverIn(e)}
										onMouseOut={(e) => navHoverOff(e)}
										ref={(element) => (nav2 = element)}
										to='/projects'
									>
										Projects{' '}
									</Link>{' '}
								</li>{' '}
								<li className='my-2'>
									<Link
										onMouseEnter={(e) => navHoverIn(e)}
										onMouseOut={(e) => navHoverOff(e)}
										ref={(element) => (nav3 = element)}
										to='/blogs'
									>
										Blogs{' '}
									</Link>{' '}
								</li>{' '}
							</ul>{' '}
						</nav>{' '}
						{/* </div>{' '} */}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</div>
	);
};

export default Menu;
