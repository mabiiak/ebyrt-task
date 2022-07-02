import React, { Component } from 'react';
import { Task } from '../styles/cardTask';

class RenderCard extends Component {
  constructor() {
    super();
    this.isCheck = this.isCheck.bind(this);
  }

  isCheck({ target }) {
    const { id } = target;
    console.log(id);
  }

  render() {
    const { tasks } = this.props;
    return (
      tasks &&
        tasks.map((task, index) => (
          <Task key={ index }>
            <div id='title'>
              <h3>{ task.title }</h3>
              <h5>{ task.date }</h5>
            </div>
            <div id='options'>
              <label for='pendente'>
                <input
                type='radio'
                name='status'
                id='pendente'
                onChange={ this.isCheck }
              />
                Pendente
              </label>
              <label for='andamento'>
                <input
                type='radio'
                name='status'
                id='andamento'
                onChange={ this.isCheck }
              />
                Em andamento
              </label>
              <label for='Concluído'>
                <input
                type='radio'
                name='status'
                id='Concluído'
                onChange={ this.isCheck }
              />
                concluído
              </label>
            </div>
            <div id='buttons'>
              <button>EDITAR</button>
              <button>DELETAR</button>
            </div>
          </Task>
        ))
    )
  }
}

export default RenderCard;