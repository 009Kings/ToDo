import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

let toDos = ["Call Tsering", "Call Tracy", "Laundry", "Finish Homework"];

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)
