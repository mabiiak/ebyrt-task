import React, { Component } from 'react';
import Create from '../components/Create';
import Header from '../components/Header';
import RenderTask from '../components/RenderTask';
import { Total } from '../styles/render';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Total>
          <Create />
          <RenderTask />
        </Total>
      </>
    )
  }
}

export default Home;
