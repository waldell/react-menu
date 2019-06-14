import React from 'react';
import MenuItem from './MenuItem';
import Menu from './Menu';
import PropTypes from 'prop-types';

export default class MenuComposition extends React.Component {
	constructor	(props) {
		super(props);

		this.state = {
			data: [],
			selectedPath: [],
			currentPath: []
		}

		this.itemClick = this.itemClick.bind(this);
		this.menuClose = this.menuClose.bind(this);
	}

	getTrail(url, data) {
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

	itemClick(e, dataItem) {
		let trail = this.getTrail(dataItem.url, this.state.data);

		if (!dataItem.selected) {
			trail = trail.slice(0, trail.length-1);
		}
		
		this.setState({
			selectedPath: trail,
			currentPath: this.getTrail('2234', this.state.data)
		})
	}
	menuClose() {
		console.log(this)
		this.setState({
			selectedPath: []
		})
	}
	render() {
		return (
			<Menu 
				close={this.menuClose}
				className='top-menu'
				itemClick={this.itemClick}
				data={this.state.data}
				selectedPath={this.state.selectedPath}
				currentPath={this.state.currentPath}
				level={1} />
		);
	}

	componentDidMount() {
		fetch('menu-data.json')
			.then(x => x.json())
			.then(x => {
				this.setState({
					data: x,
					selectedPath: [],
					currentPath: []
				});
			});
		
	}
}

MenuItem.propTypes = {

};
