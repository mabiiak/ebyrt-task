import React, { Component } from 'react';
import { HeaderStyle } from '../styles/header';

class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <h1>EBYRT - TASKS</h1>
        <div>
          <h3> ORDER </h3>
          <div>
            <button>DATE</button>
            <button>NAME</button>
            <button>STATUS</button>
          </div>
        </div>
      </HeaderStyle>
    )
  }
}

export default Header;