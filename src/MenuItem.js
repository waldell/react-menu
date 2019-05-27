import React from 'react';
import PropTypes from 'prop-types';

export default function MenuItem(props) {
  
  function itemClick(e) {
    e.preventDefault();
    props.itemClick(e, props.url);
  }
  
  return (
    <li className={`menu-item ${props.isSelectedPath ? 'menu-item--selected' : ''}`}>
      <a href={props.url} onClick={itemClick}>{props.text}</a>
      {props.children ? 
        <ul>
          {props.children}
        </ul> : ''}
    </li>
  );
}

MenuItem.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  itemClick: PropTypes.func,
  isSelectedPath: PropTypes.bool
};
