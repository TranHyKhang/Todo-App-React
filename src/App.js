import React, { Component } from 'react';
import './App.css';

import TodoApp from './Components/TodoApp';
import TodoAppHeader from './Components/TodoAppHeader';
import AddIcon from './Images/plus.svg'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      toDoList: [
        {title: "College", isComplete: false},
        {title: "Workout", isComplete: false},
        {title: "Working on Project", isComplete: false},
        {title: "Doing Homework", isComplete: false},
        {title: "Learn", isComplete: false},
        {title: "Phone My Mom", isComplete: false},
        {title: "Read a book", isComplete: false}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  onItemClicked(item) {
    return () => {
      const isComplete = item.isComplete;
      const { toDoList } = this.state;
      const index = toDoList.indexOf(item);
      
      this.setState({
        toDoList: [
          ...toDoList.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...toDoList.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp(event) {
    let text = event.target.value;
    if(event.keyCode === 13){ //enter key
      
      if(!text) {
        return;
      }

      text = text.trim();
      if(!text) {
        return;
      }

      this.setState({
        newItem: '',
        toDoList: [
          {title: text, isComplete: false},
          ...this.state.toDoList
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }


  render() 
  {
    const {toDoList} = this.state;
    return (
      <div className="App">
        <TodoAppHeader/>
        <div className="up-comming-list">
            <p className="title-list">UPCOMING</p>
            {
              toDoList.map((item, index) =>
                !item.isComplete && <TodoApp 
                  onItemClicked={this.onItemClicked(item)}
                  item={item}
                  index={index}
                  /> 
              )
            }
        </div>
        <div className="done-list">
            <p className="title-list">Finished</p>
            {
              toDoList.map((item, index) => 
                item.isComplete &&
                  <TodoApp
                      onItemClicked = {this.onItemClicked(item)}
                      item = {item}
                      index ={index}
                  />
                
              )
            }
        </div>
        <div className="add-container">
          <div className="add-form">
            <input
             value={this.state.newItem}
             className="add-input" 
             type="text" 
             placeholder="Add new item"
             onChange={this.onChange}
             onKeyUp={this.onKeyUp}></input>
          </div>
          <div className="add-icon">
            <img src={AddIcon} width={32}></img>
          </div>
        </div>
        
      </div>
    )
  }
}
