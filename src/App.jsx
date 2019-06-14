import React from 'react';
import './App.scss';
import MenuComposition from './MenuComposition';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<MenuComposition />
			</div>
		);
	}
}
