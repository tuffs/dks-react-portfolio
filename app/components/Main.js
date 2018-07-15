import React, { Component } from 'react';
import Heading from './Heading';
import Card from './Card';

class Main extends Component {
	

	constructor(props) {
		super(props);

		this.state = {
			input: '',
			output: ''
		};

		const output = '';

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			input: e.target.value	
		})		
	};

	handleSubmit(e) {
		e.preventDefault();

		this.output = this.state.input;
		this.setState({
			input: ''
		});
	}

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
					text='I will be working on this app throughout my self-learning journey.'
				/>
				<div className='container m-4'>
					<form onSubmit={this.handleSubmit}>
						<label className='label'>
							<small>Enter something to say</small>
						</label>
						<input
							type='text'
							value={this.state.input}
							onChange={this.handleChange}
							className='form-control'
						/>
						<button type='submit' className='btn btn-primary mt-4'>
							Save
						</button>
					</form>
					{ this.output &&
						<div className='alert alert-info mt-3'>
							<h4 className='mt-2'>{this.output}</h4>
						</div>
					}
				</div>
			</div>
		);
	}
}

export default Main;