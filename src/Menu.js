import React from 'react';
import MenuItem from './MenuItem';

export default function Menu(props) {
	return (
		<ul className="menu">
			{props.children}
		</ul>
	);
}
