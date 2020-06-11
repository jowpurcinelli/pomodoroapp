//This TodoList is under development and will be using part of the code above:



/*
import React, { Component } from "react";
import {styles} from  "./styles";
import {useNavigation} from "@react-navigation/native"


class App extends Component {
  state = {
    tasks: [],
    taskName: ""
  };
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({
      taskName: value
    });
  };
  copyTab = tab => {
    const newTab = [];
    for (let i = 0; i < tab.length; i++) {
      newTab.push(tab[i]);
    }




    return newTab;
  };
  handleSubmit = event => {
    event.preventDefault();
    const newTasks = this.copyTab(this.state.tasks);
    newTasks.push({
      name: this.state.taskName,
      isDone: false
    });

    this.setState({
      taskName: "",
      tasks: newTasks
    });
  };
  handleClick = name => {
    const newTasks = this.copyTab(this.state.tasks);
    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].name === name) {
        if (newTasks[i].isDone === true) {
          newTasks[i].isDone = false;
        } else {
          newTasks[i].isDone = true;
        }
        break;
      }
    }

    this.setState({
      tasks: newTasks
    });
  };
  handleDelete = name => {
    const newTasks = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].name !== name) {
        newTasks.push(this.state.tasks[i]);
      }
    }

    this.setState({
      tasks: newTasks
    });
  };
  
  */