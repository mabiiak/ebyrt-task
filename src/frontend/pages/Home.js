import React, { Component } from 'react';
import Create from '../components/Create';
import Header from '../components/Header';
import RenderTask from '../components/RenderTask';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Create />
        <RenderTask />
      </>
    )
  }
}

export default Home;
