import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu'

export default function MenuItem(props) {

	function itemClick(e) {
		e.preventDefault();
		props.itemClick(e, {
			url: props.url, 
			selected: !props.selected
		});
	}
	function _withChildrenElement() {
		let element;
		if (props.level === 1) {
			element = (
				<div className="menu__wrapper-item">
					<Menu level={props.level+1}>
						{props.children}
					</Menu>
					{ props.level === 1 ? 
						<div className="menu__commercial-area">Hello worldzzzzzz</div> : 
						''
					}
				</div>
			)
		} else {
			element = (
				<Menu level={props.level+1}>
					{props.children}
				</Menu>
			);
		}
		return (
			<>
				<button 
					href={props.url} 
					onClick={itemClick}
					aria-haspopup={true}
					>
						{props.text}
					</button>
				{element}
			</>
		);
	}
	function _withoutChildrenElement() {
		return (
			<a href={props.url} onClick={itemClick}>{props.text}</a>
		);
	}
	return (
		<li 
			className={`menu__menu-item ${props.selected ? 'menu__menu-item--selected' : ''} ${props.current ? 'menu__menu-item--current' : ''}`}
			aria-expanded={props.selected}
			aria-current={props.current}
			>
			{ props.children ? _withChildrenElement() : _withoutChildrenElement() }
		</li>
	);
}

MenuItem.propTypes = {
	text: PropTypes.string,
	url: PropTypes.string,
	itemClick: PropTypes.func,

	selected: PropTypes.bool,
	current: PropTypes.bool,

	level: PropTypes.number
};
