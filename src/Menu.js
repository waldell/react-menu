import React from 'react';
import MenuItem from './MenuItem';

export default function Menu(props) {
	const className = props.className ? props.className : '';
	const isFirstLevel = props.level === 1;
	return (
		<ul 
			{...isFirstLevel ? {
				"role":"navigation",
				"aria-label": "Main navigation"
			} : {}}
			className={`menu menu--level-${props.level} ${className}`}>
			{props.children}
		</ul>
	);
}
