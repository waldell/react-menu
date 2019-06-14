import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
	}

	get className() {
		var alignmentClass = this.props.align === 'right' ? 'menu--right' : 'menu--left';
		return `${this.props.className} menu menu--level-${this.props.level} ${alignmentClass}`;
	}

	renderMenuItems() {
		return this.props.data.map((x) => {
			return (
				<MenuItem 
					key={x.url}

					selectedPath={this.props.selectedPath}
					currentPath={this.props.currentPath}

					itemClick={this.props.itemClick}
					level={this.props.level}
					data={x} />
			);
		})
	}

	render() {
		return (
			<ul 
				className={this.className} 
				children={this.renderMenuItems()} />
		);
	}
}
