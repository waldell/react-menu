import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.menuRef = React.createRef();
		this._handleClickOutside = this._handleClickOutside.bind(this);

		this.onNavigate = this.onNavigate.bind(this);
	}

	get className() {
		return `${this.props.className?this.props.className:''} menu menu--level-${this.props.level}`;
	}

	onNavigate(dataItem) {
		if (this.props.navigate) {
			this.props.navigate(dataItem);
		}
		
	}

	_handleClickOutside(e) {
		e.stopImmediatePropagation();
		const clickedItem = e.target;
		const clickInMenu = this.menuRef.current.contains(clickedItem);
		if (!clickInMenu) {
			this.props.close();
		}
	}

	renderMenuItems() {
		return this.props.data.map((x) => {
			return (
				<MenuItem 
					key={x.url}

					selectedPath={this.props.selectedPath}
					currentPath={this.props.currentPath}

					itemClick={this.props.itemClick}
					navigate={this.onNavigate}
					
					level={this.props.level}
					data={x} />
			);
		})
	}

	render() {
		return (
			<ul 
				ref={this.menuRef}
				className={this.className} 
				children={this.renderMenuItems()} />
		);
	}

	componentWillMount() {
		document.addEventListener('mousedown', this._handleClickOutside, false);
	}
	componentWillUnmount() {
		document.addEventListener('mousedown', this._handleClickOutside, false);
	}
}
