import React from 'react';
import './App.scss';
import MenuComposition from './MenuComposition';
import Heightr from './Heightr';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedPath: [],
			data: []
		}

		this.onNavigation = this.onNavigation.bind(this);
	}

	componentDidMount() {
		fetch('menu-data.json')
			.then(x => x.json())
			.then(x => {
				this.setState({
					data: x,
					currentPath: this._getTrail('2234', x)
				});
			});
		
	}

	_getTrail(url, data) {
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

	onNavigation(e, obj) {
		var trail = this._getTrail(obj.url, this.state.data);
		if (!obj.selected) {
			trail = trail.slice(0, trail.length-1);
		}
		this.setState({
			selectedPath: trail
		});
	}
	render() {
		return (
			<div className="App">
				<MenuComposition data={this.state.data} selectedPath={this.state.selectedPath} currentPath={this.state.currentPath} onNavigation={this.onNavigation} />
			</div>
		);
	}
}
