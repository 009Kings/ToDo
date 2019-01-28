import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
      toDos: ["Buy IceCream", "Call Tracy", "Laundry", "Finish Homework"]
    }
  }
  
  storeInput = (e) => {
    this.setState({ input: e.target.value })
  }

  addNewItem = (e) => {
    e.preventDefault();
    let newList = this.state.toDos;
    newList.push(this.state.input);

    this.setState({
      toDos: newList,
      input: "",
    })
  }

  deleteItem = (itemIndex) => {
    let toDos = this.state.toDos
    toDos.splice(itemIndex, 1)
    this.setState({ toDos });
  }

  render() {
    let todos = this.state.toDos.map((item, index) => <ListItem toDo={item} key={index} toggleDelete={()=>this.deleteItem(index)} / >);

    return (
      <div className="app-container">
        <h1 className="tc light-pink"> Things I should stop procrastinating:</h1>
        <ul className="center">
          {todos}
        </ul>
        <form className="tc m2" onSubmit={this.addNewItem}>
          <input className="pa1 mr2" type="text" placeholder="Enter a new Task" onChange={this.storeInput} value={this.state.input} />
          <input className="pa1 center f6 grow no-underline br-pill ph3 pv2 white bg-dark-blue" type="submit" placeholder="Add New Task" />
        </form>
      </div>
    )
  }
}

export default MyList;