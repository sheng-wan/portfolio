import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Index from './components/Index/Index';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blog';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Index} />{' '}
						<Route exact path='/about' component={About} />{' '}
						<Route exact path='/projects' component={Projects} />{' '}
						<Route exact path='/blogs' component={Blogs} />{' '}
						<Route path='*' component={PageNotFound} />{' '}
					</Switch>{' '}
				</div>{' '}
			</div>{' '}
		</Router>
	);
}

export default App;
