import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './index.scss';
import App from './components/App';

class AppRouter extends React.Component {
	render() {
		return(
			<div>
				<App />
			</div>
		);
	}
}

ReactDOM.render(
	<AppRouter />,
	document.getElementById('app')
);