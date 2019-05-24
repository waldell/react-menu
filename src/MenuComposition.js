import React from 'react';
import MenuItem from './MenuItem';
import Menu from './Menu';
import PropTypes from 'prop-types';

export default function MenuComposition(props) {

  function bind(children) {
    return children.map(item => {
      return (
        <MenuItem text={item.text} onClick={itemClick}>
          {item.children ? bind(item.children) : ''}
        </MenuItem>
      );
    });
  }

  function itemClick(e) {
    props.onNavigation(e);
  }

  return (
    <Menu>
      {props.data ? bind(props.data) : ''}
    </Menu>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object,
  onNavigation: PropTypes.func
};