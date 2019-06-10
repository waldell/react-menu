import React from 'react';
import MenuItem from './MenuItem';
import Menu from './Menu';
import PropTypes from 'prop-types';

export default function MenuComposition(props) {

	function itemClick(e, obj) {
		props.onNavigation(e, obj);
	}

	function bind(children, level) {
		return children.map(item => {
			const isSelected = props.selectedPath.indexOf(item.url) > -1;
			const isCurrent = props.currentPath.indexOf(item.url) > -1;
			return (
				<MenuItem text={item.text} url={item.url} itemClick={itemClick} selected={isSelected} current={isCurrent} key={item.url} level={level}>
					{ item.children ? bind(item.children, level+1) : '' }
				</MenuItem>
			);
		});
	}

	return (
		<Menu level={1} className="top-menu">
			{props.data ? bind(props.data, 1) : ''}
		</Menu>
	);
}

MenuItem.propTypes = {
	data: PropTypes.object,
	onNavigation: PropTypes.func,
	selectedPath: PropTypes.arrayOf(PropTypes.string),
	currentPath: PropTypes.arrayOf(PropTypes.string)
};
