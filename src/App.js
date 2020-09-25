import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ReactGA from 'react-ga';
// import { createBrowserHistory } from 'history';
import GA from './components/GoogleAnalytics';

import Header from './components/Header/Header';
import Index from './components/Index/Index';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blog';
import PageNotFound from './components/PageNotFound/PageNotFound';

// const trackingId = 'UA-176439950-1';
// ReactGA.initialize(trackingId);
// const history = createBrowserHistory();
// history.listen((location) => {
// 	ReactGA.set({ page: location.pathname }); // Update the user's current page
// 	ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

function App() {
	return (
		<Router>
			{GA.init() && <GA.RouteTracker />}
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
