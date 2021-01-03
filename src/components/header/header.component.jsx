import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Menu from "../menu/menu.component";
import "./header.styles.scss";
import logo_blue from "../../assets/images/logo-blue.png";

const Header = ({ history }) => {
	const [menuState, setMenuState] = useState({
		inital: false,
		clicked: null,
		opened: "MENU",
	});
	const [disabledState, setDisabledState] = useState(false);

	useEffect(() => {
		history.listen(() => {
			setMenuState({
				clicked: false,
				opened: "MENU",
			});
		});
	}, [history]);

	const handleToggle = () => {
		disableMenu();
		if (menuState.inital === false) {
			setMenuState({
				inital: null,
				clicked: true,
				opened: "CLOSE",
			});
		} else if (menuState.clicked === true) {
			setMenuState({
				clicked: !menuState.clicked,
				opened: "MENU",
			});
		} else if (menuState.clicked === false) {
			setMenuState({
				clicked: !menuState.clicked,
				opened: "CLOSE",
			});
		}
	};

	const disableMenu = () => {
		setDisabledState(!disabledState);
		setTimeout(() => {
			setDisabledState(false);
		}, 1200);
	};

	return (
		<header>
			<div className="container">
				<div className="header-wrapper">
					<div
						id="header-inner-header"
						className="position-relative d-flex justify-content-between align-items-center"
					>
						<div id="header-logo">
							<Link to="/">
								<img id="logo" src={logo_blue} alt="WAN SHENG" />
							</Link>
						</div>
						<div id="header-menu">
							<button
								id="menu-btn"
								className="btn btn-secondary text-primary"
								disabled={disabledState}
								onClick={handleToggle}
							>
								{menuState.opened}
							</button>
						</div>
					</div>
				</div>
			</div>
			<Menu menuState={menuState} />
		</header>
	);
};

export default withRouter(Header);
