import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class='card'>
				<div class='card-body'>
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

export default Card;