import React from 'react';
import PropTypes from 'prop-types';

export default function MenuItem(props) {
  function itemClick(e) {
    e.stopPropagation();
    props.onClick(e);
  }
  return (
    <li onClick={itemClick}>
      {props.text}

      {props.children ? 
        <ul>
          {props.children}
        </ul> : ''}
      
    </li>
  );
}
MenuItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};