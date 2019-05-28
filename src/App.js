import React from 'react';
import './App.scss';
import MenuComposition from './MenuComposition';

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
				this.setState({data: x}); // BOKA MÖTE
			})
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
		findObj(this.state.data, index);
		trail = trail.slice(0, index);
		return trail;
	}

	onNavigation(e, obj) {
		var trail = this._getTrail(obj.url);
		if (!obj.selected) {
			trail = trail.slice(0,trail.length-1);
		}
		this.setState({
			selectedPath: trail
		});
	}
	render() {
		return (<div className="App">
			<MenuComposition data={this.state.data} selectedPath={this.state.selectedPath} onNavigation={this.onNavigation} />
		</div>);
	}
}
