import React, { Component } from 'react';

class ListItem extends Component {

  render() {
    return (
      <div className="flex flex-column">
        <li className="tc">{this.props.toDo}</li>
        <a onClick={(e)=>this.props.toggleDelete()} className="center f6 grow no-underline br-pill ph3 pv2 mb2 white bg-hot-pink" href="#0">Delete Task</a>
        <hr className="w-100 bb b--black-40"/>
      </div>
    )
  }
}

export default ListItem
