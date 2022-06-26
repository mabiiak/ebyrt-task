import React, { Component } from 'react';
import Create from '../components/Create';
import Header from '../components/Header';
import TaskCard from '../components/TaskCard';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Create />
        <TaskCard />
      </>
    )
  }
}

export default Home;
