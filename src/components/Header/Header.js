import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Menu from './header_components/Menu';
import './Header.scss';
import logob from '../../images/logo-blue.png';

const Header = ({ history }) => {
	// state for menu toggle status
	const [menuState, setMenuState] = useState({
		inital: false,
		clicked: null,
		opened: 'MENU',
	});
	// state for disabled menu button
	const [disabledState, setDisabledState] = useState(false);

	// useEffect listening for page changes
	useEffect(() => {
		history.listen(() => {
			setMenuState({
				clicked: false,
				opened: 'MENU',
			});
		});
	}, [history]);

	// menu toggle method
	const handleToggle = () => {
		disableMenu();
		if (menuState.inital === false) {
			setMenuState({
				inital: null,
				clicked: true,
				opened: 'CLOSE',
			});
		} else if (menuState.clicked === true) {
			setMenuState({
				clicked: !menuState.clicked,
				opened: 'MENU',
			});
			// document.getElementByClassName('header-menu').classList.add('open');
		} else if (menuState.clicked === false) {
			setMenuState({
				clicked: !menuState.clicked,
				opened: 'CLOSE',
			});
		}
	};

	// determine if the menu button should be disabled
	const disableMenu = () => {
		setDisabledState(!disabledState);
		setTimeout(() => {
			setDisabledState(false);
		}, 1200);
	};

	return (
		<header>
			<div className='container'>
				<div className='header-wrapper'>
					<div id='header-inner-header'>
						<div id='header-logo'>
							<Link to='/'>
								<img id='logo' src={logob} alt='WAN SHENG' />
							</Link>{' '}
						</div>{' '}
						<div id='header-menu'>
							<button
								id='menu-btn'
								className='btn btn-secondary text-white'
								disabled={disabledState}
								onClick={handleToggle}
							>
								{' '}
								{menuState.opened}{' '}
							</button>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
			<Menu menuState={menuState} />{' '}
		</header>
	);
};

export default withRouter(Header);
