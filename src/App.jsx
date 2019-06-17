import React from 'react';
import './App.scss';
import MenuComposition from './MenuComposition';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.navigationHandler = this.navigationHandler.bind(this);
	}

	navigationHandler(dataItem) {
		console.log(dataItem);
	}

	render() {
		return (
			<div className="App">
				<MenuComposition onNavigation={this.navigationHandler} />
			</div>
		);
	}
}
