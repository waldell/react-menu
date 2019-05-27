import React from 'react';
import './App.css';
import MenuComposition from './MenuComposition';


var data = [
	{
		text: 'One 1', url: '1', children: [
			{
				text: 'One 1-1', url: '11', children: [
					{ text: 'One 1-1-1', url: '111' },
					{ text: 'One 1-1-2', url: '112' },
					{
						text: 'One 1-1-3', url: '113', children: [
							{ text: 'One 1-1-3-1', url: '1131' },
							{ text: 'One 1-1-3-2', url: '1132' },
							{ text: 'One 1-1-3-3', url: '1133' },
							{ text: 'One 1-1-3-4', url: '1134' }
						]
					},
					{ text: 'One 1-1-4', url: '114' }
				]
			},
			{ text: 'One 1-2', url: '12' },
			{ text: 'One 1-3', url: '13' }
		]
	},
	{
		text: 'One 2', url: '2', children: [
			{ text: 'One 2-1', url: '21' },
			{ text: 'One 2-2', url: '22' },
			{ text: 'One 2-3', url: '23' }
		]
	}
];

export default class App extends React.Component {
	constructor(props, state) {
		super(props);

		this.state = {
			selectedPath: []
		}

		this.onNavigation = this.onNavigation.bind(this);
	}

	_getTrail(url) {
		var trail = [];
		var index = 0;
		function findObj(arr, idx) {
			for (let current of arr) {
				trail[idx] = current.url;
				if (current.url === url) {
					index = idx + 1;
					return current;
				} else {
					if (current.children) {
						var found = findObj(current.children, idx + 1);
						if (found) {
							return found;
						}
					}
				}
			}
		}
		findObj(data, index);
		trail = trail.slice(0, index);
		return trail;
	}

	onNavigation(e, url) {
		this.setState({
			selectedPath: this._getTrail(url)
		});
	}
	render() {
		return (<div className="App">
			<MenuComposition data={data} selectedPath={this.state.selectedPath} onNavigation={this.onNavigation} />
		</div>);
	}
}
