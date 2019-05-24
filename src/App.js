import React from 'react';
import './App.css';
import MenuComposition from './MenuComposition';

var data = [
  {text:'One 1', children: [
    {text:'One 1-1', children: [
      {text:'One 1-1-1'},
      {text:'One 1-1-2'},
      {text:'One 1-1-3'},
      {text:'One 1-1-4'}
    ]},
    {text:'One 1-2'},
    {text:'One 1-3'}
  ]},
  {text:'One 2', children: [
    {text:'One 2-1'},
    {text:'One 2-2'},
    {text:'One 2-3'}
  ]}
];

export default function App(props) {
  function onNavigation(e) {
    console.log('navigation occured in app')
  }

  return (
    <div className="App">
      <MenuComposition data={data} onNavigation={onNavigation}/>
    </div>
  );
  
}
