import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';

class App extends React.Component {
	render() {
		return (
			<div>
				<Nav title="DKS React Portfolio" />
				<Router>
					<Route path='/' exact component={Home} />
				</Router>
			</div>
		);
	}
}

export default App;