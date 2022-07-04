import React, { Component } from 'react';
import { Task } from '../styles/cardTask';
import Trash from '../images/lixeira.png';
import Edit from '../images/editar.png';

class RenderCard extends Component {
  render() {
    const { tasks, deleteTask, changeStatus } = this.props;
    return (
      tasks &&
        tasks.map((task, index) => (
          <Task key={ index }>
            <div id='title'>
              <h3 id={ task.status }>{ task.title }</h3>
              <h5>{ task.date }</h5>
            </div>
            <div id='second-line'>
              <select id={ task.title } onChange={ changeStatus } >
                <option
                  value='pendente'
                  selected={ task.status === 'pendente' }
                >
                  Pendente
                </option>
                <option
                  value='andamento'
                  selected={ task.status === 'andamento' }
                >
                  Em andamento
                </option>
                <option
                  value='concluído'
                  selected={ task.status === 'concluído' }
                >
                  Concluído
                </option>
              </select>
              {/* <button>
                <img
                  src={ Edit }
                  id={ task.title }
                  alt='icon edit'
                />
              </button> */}
              <button>
                <img
                  src={ Trash }
                  id={ task.title }
                  alt='icon trash'
                  onClick={ deleteTask }
                />
              </button>
            </div>
          </Task>
        ))
    )
  }
}

export default RenderCard;