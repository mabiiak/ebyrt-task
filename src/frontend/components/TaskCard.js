import React, { Component } from 'react';
import { Task } from '../styles/cardTask';

class TaskCard extends Component {
  render() {
    return (
      <Task>
        <div id='title'>
          <h3>TITLE</h3>
          <h5>25-06-22</h5>
        </div>
        <div id='options'>
          <label for='pendente'>
            <input type='radio' name='status' id='pendente'/>
            Pendente
          </label>
          <label for='andamento'>
            <input type='radio' name='status' id='andamento'/>
            Em andamento
          </label>
          <label for='Concluído'>
            <input type='radio' name='status' id='Concluído'/>
            concluído
          </label>
        </div>
        <div id='buttons'>
          <button>EDITAR</button>
          <button>DELETAR</button>
        </div>
      </Task>
    )
  }
}

export default TaskCard;