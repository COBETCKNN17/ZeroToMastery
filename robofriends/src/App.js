import React, {Component} from 'react';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './searchBox';
import './App.css';

class App extends Component {
	constructor() {
		super(); // calls the constructor of component
		this.state = {
		// things that can change and affect the app. Usually lives in parent component
			robots: [], 
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({robots: users});
			});
	}
	
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		// every time the input changes, we get an event. 
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className='tc'>
				<h1 className='f2'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;