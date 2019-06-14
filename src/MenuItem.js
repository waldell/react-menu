import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu'

export default class MenuItem extends React.Component {

	constructor(props) {
		super(props);
		this.listItemRef = React.createRef();
		this.state = {
			rightAlign: false
		};
		this.itemClick = this.itemClick.bind(this);
		this.linkClick = this.linkClick.bind(this);
	}

	get className() { 
		var className = 'menu__menu-item';
		if (this.props.selectedPath.indexOf(this.props.data.url) > -1) {
			className += ' menu__menu-item--selected'
		}
		if (this.props.currentPath.indexOf(this.props.data.url) > -1) {
			className += ' menu__menu-item--current'
		}
		
		return className;
	}
	get hasChildren() { return this.props.data.children ? true : false }

	linkClick(e) {
		if (this.props.navigate) {
			this.props.navigate(e);
		}
		
		this.itemClick(e);
	}
	itemClick(e) {
		e.preventDefault();
		this._markCurrentSelectedItem(e);
		this._setAlignment();
	}

	_setAlignment() {
		const clickedItemCenterOffsetFromLeft = this.listItemRef.current.offsetLeft + (this.listItemRef.current.offsetWidth / 2);
		const rightAlign = clickedItemCenterOffsetFromLeft > 560;
		this.setState({
			rightAlign: rightAlign
		});
	}

	_markCurrentSelectedItem(e) {
		// look for the current menuitem in the current selected path...
		const currentSelectedItemIndex = this.props.selectedPath.indexOf(this.props.data.url);
		// ...if it exists in the array...
		const selected = currentSelectedItemIndex === -1;

		this.props.itemClick(e, {
			url: this.props.data.url,
			selected: selected
		});
	}

	// TODO: refactor the menu_wrapper item stuff!!! Should be able to break this out and remove if from menu-item
	renderSubMenu() {
		let element = '';
		if (this.props.level === 1) {
			element = (
				<div className={`menu__wrapper-item ${this.state.rightAlign ? 'menu__wrapper-item--right' : ''}`}>
					<Menu 
						navigate={this.props.navigate}
						itemClick={this.props.itemClick}
						selectedPath={this.props.selectedPath}
						currentPath={this.props.currentPath}
						data={this.props.data.children}
						level={this.props.level+1} />

					<div className="menu__commercial-area" dangerouslySetInnerHTML={{__html: 'this.props.commercial'}}></div>
				</div>
			);
		} else {
			element = (
				<Menu 
					itemClick={this.props.itemClick}
					selectedPath={this.props.selectedPath}
					currentPath={this.props.currentPath}
					data={this.props.data.children}
					level={this.props.level+1} />
			);
		}
		

		return this.hasChildren ? element : '';
	}
	
	renderButton() {
		return (
			<button 
				onClick={this.itemClick} 
				children={this.props.data.text} />
		);
	}

	renderLink() {
		return (
			<a 
				onClick={this.linkClick} 
				href={this.props.data.url}
				children={this.props.data.text} />
		);
	}

	render() {
		return(
			<li 
				ref={this.listItemRef}
				className={this.className}>

				{ this.hasChildren ? this.renderButton() : this.renderLink() }
				{ this.renderSubMenu() }
			</li>
		);
	}

	componentDidMount() {
	}

	
}


