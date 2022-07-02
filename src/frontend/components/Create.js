import React, { Component } from 'react';
import { CardCreate } from '../styles/cardTask';
import getStorage from '../utils/localStorage';

class Create extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.createButton = this.createButton.bind(this);
    this.getDate = this.getDate.bind(this);

    this.state = {
      title: '',
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  getDate() {
    const date =  Date().split(' ');
    const dateObj = { day: date[2], month: date[1] }

    return dateObj;
  }

  createButton() {
    const { title } = this.state;
    const key = 'tasks';
    const date = this.getDate();
        
    const local = getStorage(key);

    if (local !== null) {
      localStorage.setItem(key, JSON.stringify([...local, { title, date }]));
    } else {
      localStorage.setItem(key, JSON.stringify([{ title, date }]));
    }

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
        <button onClick={ this.createButton }>CREATE</button>
      </CardCreate>
    )
  }
}

export default Create;