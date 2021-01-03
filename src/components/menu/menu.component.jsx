import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { staggerReveal, staggerRevealClose } from "./menu.animation";
import "./menu.styles.scss";

const Menu = ({ menuState }) => {
	let menuLayer = useRef(null);
	let reveal1 = useRef(null);
	let reveal2 = useRef(null);

	useEffect(() => {
		if (menuState.clicked === false) {
			staggerRevealClose(reveal2, reveal1);
			gsap.to(menuLayer, {
				duration: 1,
				css: {
					display: "none",
				},
			});
		} else if (
			menuState.clicked === true ||
			(menuState.clicked === true && menuState.initial === null)
		) {
			gsap.to(menuLayer, {
				duration: 0,
				css: {
					display: "block",
				},
			});
			gsap.to([reveal1, reveal2], {
				duration: 0,
				opacity: 1,
				height: "100%",
			});
			staggerReveal(reveal1, reveal2);
		}
	}, [menuState]);

	return (
		<div
			ref={(element) => (menuLayer = element)}
			id="menu-hamburger-menu"
			className="position-fixed w-100 h-100"
		>
			<div
				ref={(element) => (reveal1 = element)}
				id="menu-secondary-background-color"
				className="position-fixed"
			></div>
			<div
				ref={(element) => (reveal2 = element)}
				id="menu-layer"
				className="position-relative bg-primary"
			>
				<div className="container h-100">
					<div
						id="menu-wrapper"
						className="d-flex align-items-center position-relative"
					>
						<nav className="d-block">
							<ul
								id="menu-ul"
								className="text-left p-0 m-0 list-unstyled display-1 position-relative"
							>
								<li id="menu-li" className="my-2">
									<Link to="/"> Home </Link>
								</li>
								<li id="menu-li" className="my-2">
									<Link to="/about"> About </Link>
								</li>
								<li id="menu-li" className="my-2">
									<Link to="/projects"> Projects </Link>
								</li>
								<li id="menu-li" className="my-2">
									<Link to="/blogs"> Blogs </Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
