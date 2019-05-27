import React from 'react';
import MenuItem from './MenuItem';
import Menu from './Menu';
import PropTypes from 'prop-types';

export default function MenuComposition(props) {
  
  function itemClick(e, url) {
    props.onNavigation(e, url);
  }

  function bind(children) {
    return children.map(item => {
      const isSelected = props.selectedPath.indexOf(item.url) > -1;
      return (
        <MenuItem text={item.text} url={item.url} itemClick={itemClick} isSelectedPath={isSelected} key={item.url}>
          {item.children ? bind(item.children) : ''}
        </MenuItem>
      );
    });
  }

  return (
    <Menu>
      {props.data ? bind(props.data) : ''}
    </Menu>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object,
  onNavigation: PropTypes.func,
  selectedPath: PropTypes.arrayOf(PropTypes.string)
};
