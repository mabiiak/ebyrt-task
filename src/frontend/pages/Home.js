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
    this.changeStatus = this.changeStatus.bind(this);

    this.state = { totalTasks: getStorage('tasks') };
  }

  createButton(title) {
    const key = 'tasks';
    const date = getDate();
    const { totalTasks } = this.state;

    if (totalTasks !== null) {
      localStorage
      .setItem(key, JSON.stringify([...totalTasks, { title, status: 'pendente', date }]));
    } else {
      localStorage
      .setItem(key, JSON.stringify([{ title, status: 'pendente', date }]));
    }

    this.setState({ totalTasks: getStorage(key) });
  };

  changeStatus({ target }) {
    const { totalTasks } = this.state;
    const { id, value } = target;

    const filterRemove = totalTasks.filter((task) => task.title !== id);
    const editItem = totalTasks.filter((task) => task.title === id);
    editItem[0].status = value;

    this.setState({ totalTasks: [...filterRemove, ...editItem] });
    localStorage.setItem('tasks', JSON.stringify(totalTasks));
  }

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
            changeStatus={ this.changeStatus }
          />
        </Total>
      </>
    )
  }
}

export default Home;
