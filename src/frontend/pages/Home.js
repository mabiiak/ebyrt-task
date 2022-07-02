import React, { Component } from 'react';
import Header from '../components/Header';
import Create from '../components/Create';
import RenderCard from '../components/RenderCard';

import { Total } from '../styles/render';

import getStorage from '../utils/localStorage';
import getDate from '../utils/createDate';

class Home extends Component {
  constructor() {
    super()
    this.createButton = this.createButton.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    this.state = { totalTasks: [] };
  }

  createButton(title) {
    const key = 'tasks';
    const date = getDate();
        
    const local = getStorage(key);

    if (local !== null) {
      localStorage
      .setItem(key, JSON.stringify([...local, { title, status: 'pendente', date }]));
    } else {
      localStorage
      .setItem(key, JSON.stringify([{ title, status: 'pendente', date }]));
    }

    this.setState({ totalTasks: getStorage(key) });
  };

  deleteTask({ target }) {
    const { totalTasks } = this.state;
    const { id } = target;

    const filter = totalTasks.filter((task) => task.title !== id);

    this.setState({ totalTasks: filter });
    localStorage.setItem('tasks', JSON.stringify(filter));
  }

  render() {
    return (
      <>
        <Header />
        <Total>
          <Create createButton={ this.createButton }/>
          <RenderCard
            tasks={ this.state.totalTasks }
            deleteTask={ this.deleteTask }
          />
        </Total>
      </>
    )
  }
}

export default Home;
