import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='card'>
				<div className='card-body'>
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

export default Card;