import React, { Component } from 'react';
import { CardCreate } from '../styles/cardTask';

class Create extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);

    this.state = { title: '' };
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  clickButton(title) {
    const { createButton } = this.props;

    createButton(title);
    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state;
    return (
      <CardCreate>
        <h3> NEW TASK </h3>
        <input
          type='text'
          name='title'
          onChange={ this.handleChange }
          placeholder='TITLE'
          value={ title }
        />
        <button onClick={ () => this.clickButton(title) }>CREATE</button>
      </CardCreate>
    )
  }
}

export default Create;