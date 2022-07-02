import React, { Component } from 'react';
import { Task } from '../styles/cardTask';
import Trash from '../images/lixeira.png';
import Edit from '../images/editar.png';

class RenderCard extends Component {
  constructor() {
    super();
    this.isCheck = this.isCheck.bind(this);
  }

  isCheck({ target }) {
    const { value } = target;
    console.log(value);
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
            <div id='second-line'>
              <select onChange={ this.isCheck }>
                <option value='pendente'>Pendente</option>
                <option value='andamento'>Em andamento</option>
                <option value='concluído'>concluído</option>
              </select>
              <button>
                <img src={ Trash } alt='icon trash'/>
              </button>
              <button>
                <img src={ Edit } alt='icon trash'/>
              </button>
            </div>
          </Task>
        ))
    )
  }
}

export default RenderCard;