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
	staggerRevealClose
} from './MenuAnimation';

// import dallas from "../images/dallas.webp";
// import austin from "../images/austin.webp";
// import newyork from "../images/newyork.webp";
// import sanfrancisco from "../images/sanfrancisco.webp";
// import beijing from "../images/beijing.webp";

// const cities = [
//   { name: "Dallas", image: dallas },
//   { name: "Austin", image: austin },
//   { name: "New York", image: newyork },
//   { name: "San Francisco", image: sanfrancisco },
//   { name: "Beijing", image: beijing }
// ];

const Menu = ({ menuState }) => {
	// variables of our dom nodes
	let menuLayer = useRef(null);
	let reveal1 = useRef(null);
	let reveal2 = useRef(null);
	// let cityBackground = useRef(null);
	let nav1 = useRef(null);
	let nav2 = useRef(null);
	let nav3 = useRef(null);
	let info = useRef(null);

	useEffect(() => {
		if (menuState.clicked === false) {
			staggerRevealClose(reveal2, reveal1);
			gsap.to(menuLayer, {
				duration: 1,
				css: { display: 'none' }
			});
		} else if (
			menuState.clicked === true ||
			(menuState.clicked === true && menuState.initial === null)
		) {
			gsap.to(menuLayer, {
				duration: 0,
				css: { display: 'block' }
			});
			gsap.to([reveal1, reveal2], {
				duration: 0,
				opacity: 1,
				height: '100%'
			});
			staggerReveal(reveal1, reveal2);
			// fadeInUp(info);
			staggerText(nav1, nav2, nav3);
		}
	}, [menuState]);

	return (
		<div ref={element => (menuLayer = element)} className='menu-hamburger-menu'>
			<div
				ref={element => (reveal1 = element)}
				className='menu-secondary-background-color'
			></div>
			<div ref={element => (reveal2 = element)} className='menu-layer'>
				{/* <div */}
				{/* ref={element => (cityBackground = element)} */}
				{/* className='menu-city-background'></div> */}
				<div className='container'>
					<div className='menu-wrapper'>
						<div className='menu-links'>
							<nav>
								<ul>
									<li>
										<Link
											onMouseEnter={e => navHoverIn(e)}
											onMouseOut={e => navHoverOff(e)}
											ref={element => (nav1 = element)}
											to='/about'
										>
											About
										</Link>
									</li>
									<li>
										<Link
											onMouseEnter={e => navHoverIn(e)}
											onMouseOut={e => navHoverOff(e)}
											ref={element => (nav2 = element)}
											to='/projects'
										>
											Projects
										</Link>
									</li>
									<li>
										<Link
											onMouseEnter={e => navHoverIn(e)}
											onMouseOut={e => navHoverOff(e)}
											ref={element => (nav3 = element)}
											to='/contact'
										>
											Contact
										</Link>
									</li>
								</ul>
							</nav>
							{/* <div ref={element => (info = element)} className='info'> */}
							{/* <h3>Our Promise</h3> */}
							{/* <p> */}
							{/* The passage experienced a surge in popularity during the 1960s */}
							{/* when Letraset used it on their dry-transfer sheets, and again */}
							{/* during the 90s as desktop publishers bundled the text with */}
							{/* their software. */}
							{/* </p> */}
							{/* </div> */}
							{/* <div className='locations'> */}
							{/* Locations: */}
							{/* Returning the list of cities */}
							{/* {cities.map(element => ( */}
							{/* <span */}
							{/* key={element.name} */}
							{/* onMouseEnter={() => handleCity(element.image, cityBackground)} */}
							{/* onMouseOut={() => handleCityReturn(cityBackground)}> */}
							{/* {element.name} */}
							{/* </span> */}
							{/* ))} */}
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
