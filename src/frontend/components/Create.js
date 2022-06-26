import React, { Component } from 'react';

class Create extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.createButton = this.createButton.bind(this);

    this.state = {
      title: '',
      description: '',
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  createButton() {
    const { title, description } = this.state;
    console.log( title, description);
  }

  render() {
    return (
      <>
        <h3>
          N E W T A S K
        </h3>
        <input
          type='text'
          name='title'
          onChange={ this.handleChange }
          placeholder='T I T L E'
        />
        <input
          type='text'
          name='description'
          onChange={ this.handleChange }
          placeholder='D E S C R I P T I O N'
        />
        <button onClick={ this.createButton }>C R E A T E</button>
      </>
    )
  }
}

export default Create;