import React from 'react';
import PropTypes from 'prop-types';

export default function MenuItem(props) {

	function itemClick(e) {
		e.preventDefault();
		props.itemClick(e, {
			url: props.url, 
			selected: !props.selected
		});
	}

	return (
		<li className={`menu__menu-item ${props.selected ? 'menu__menu-item--selected' : ''}`}>
			<a href={props.url} onClick={itemClick}>{props.text}</a>
				{props.children ?
				<ul className={`menu__sub-menu menu__sub-menu--level-${props.level}`}>
					{props.children}
				</ul> : ''}
		</li>
	);
}

MenuItem.propTypes = {
	text: PropTypes.string,
	url: PropTypes.string,
	itemClick: PropTypes.func,
	selected: PropTypes.bool,
	level: PropTypes.number
};
