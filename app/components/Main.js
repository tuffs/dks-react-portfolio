import React, { Component } from 'react';
import Heading from './Heading';
import Card from './Card';

class Main extends Component {
	render() {
		return (
			<div className='container pt-4'>
				<Heading
					title='Welcome to my portfolio.'
					text='This app has been written in ReactJS using
					Webpack as a bundler for an example of what we can
					 achieve for your business.'
				/>
				<Card
					text='If you like what you see here, please consider
					giving me a follow on GitHub for my public repos 
					under *tuffs*'
				/>
			</div>
		);
	}
}

export default Main;