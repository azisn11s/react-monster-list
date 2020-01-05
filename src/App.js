import React, { Component } from 'react';
import CardListComponent from './components/card-list/CardListComponent';

import "./App.css";
import SearchFieldComponent from './components/search-field/SearchFieldComponent';

class App extends Component
{
	constructor(){
		
		super();

		this.state = {
			monsters: [],
			searchField: ""
		}

	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters : users }));		
	}

	handleSearch = (e) => {
		this.setState({ searchField: e.target.value })
	}

	render(){

		const { monsters, searchField } = this.state;
		const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
	
		return (
			<div className="App">
				
				<SearchFieldComponent
					placeholder="search monster" 
					handleSearch={ this.handleSearch  } 
				/>
				
				<CardListComponent monsters={filteredMonster} />

			</div>
		);
	}
}

export default App;
