import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

import Header from "./components/Header/Header";
import Index from "./components/Index/Index";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blog";
import PageNotFound from "./components/PageNotFound/PageNotFound";

ReactGA.initialize("UA-176439950-1");
ReactGA.pageview(window.location.pathname + window.location.search);
const history = createBrowserHistory();
history.listen((location) => {
	ReactGA.set({ page: location.pathname }); // Update the user's current page
	ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Index} />
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Projects} />
						<Route exact path="/blogs" component={Blogs} />
						<Route path="*" component={PageNotFound} />
					</Switch>
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
