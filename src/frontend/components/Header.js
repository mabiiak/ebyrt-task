import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>E B Y R T - T A S K S</h1>
        <div>
          <h3>
            O R D E R
          </h3>
          <button>D A T E</button>
          <button>N A M E</button>
          <button>S T A T U S</button>
        </div>
      </header>
    )
  }
}

export default Header;