import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div>
        <li className="list-item">{this.props.toDo}</li>
        <hr />
      </div>
    )
  }
}

export default ListItem
