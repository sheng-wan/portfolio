import React from 'react';
import './App.scss';

import Header from './components/Header/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
// import About from './old_components/About/About';
import Projects from './views/Projects/Projects';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='container'>
					<div className='wrapper'>
						{' '}
						{/* <div className='home'> */}{' '}
						<Switch>
							<Route exact path='/' component={Home} />{' '}
							<Route exact path='/about' component={About} />{' '}
							{/* <Route exact path='/about' component={About} />{' '} */}{' '}
							<Route exact path='/projects' component={Projects} />{' '}
							<Route exact path='/contact' component={Contact} />{' '}
							<Route path='*' component={PageNotFound} />{' '}
						</Switch>{' '}
						{/* </div>{' '} */}{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</Router>
	);
}

export default App;
