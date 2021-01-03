import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
// import { createBrowserHistory } from "history";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import About from "./pages/aboutpage/aboutpage.component";
// import Projects from "./components/Projects/Projects";
import Projects from "./pages/projectspage/projectspage.component";
import BlogPage from "./pages/blogpage/blogpage.component";
import PageNotFound from "./pages/pagenotfound/page-not-found.component";

ReactGA.initialize("UA-176439950-1");
ReactGA.pageview(window.location.pathname + window.location.search);
// const history = createBrowserHistory();
// history.listen((location) => {
// 	ReactGA.set({ page: location.pathname }); // Update the user's current page
// 	ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

function App() {
	return (
		// <Router history={history}>
		<Router>
			<div className="App">
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Projects} />
						<Route exact path="/blogs" component={BlogPage} />
						<Route path="*" component={PageNotFound} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
