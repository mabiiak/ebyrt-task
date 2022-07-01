import React, { Component } from 'react';
import { CardCreate } from '../styles/cardTask';

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
      <CardCreate>
        <h3> NEW TASK </h3>
        <input
          type='text'
          name='title'
          onChange={ this.handleChange }
          placeholder='TITLE'
        />
        <button onClick={ this.createButton }>CREATE</button>
      </CardCreate>
    )
  }
}

export default Create;