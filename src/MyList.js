import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  render() {
    
    
    let todos = this.props.theList.map((item, index) => <ListItem toDo={item} key={index} / >);

    return (
      <div className="app-container">
        <h1 className="center light-pink"> Things I should stop procrastinating:</h1>
        <ul className="center">
          {todos}
        </ul>
      </div>
    )
  }
}

export default MyList
