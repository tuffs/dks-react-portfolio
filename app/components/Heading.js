import React, { Component } from 'react';

class Heading extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3 className='display-4 pt-4'>{this.props.title}</h3>
				<p className='text-muted'>{this.props.text}</p>
				<hr/>
			</div>
		);
	}
}

export default Heading;