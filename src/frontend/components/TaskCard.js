import React, { Component } from 'react';

class TaskCard extends Component {
  render() {
    return (
      <>
        <div>
          <h3>T I T L E</h3>
          <h4>2 5 - 0 6 - 2 2</h4>
        </div>
        <div>
          <button>E D I T A R</button>
          <button>E X C L U I R</button>
        </div>
        <p>
          D E S C R I C A O
        </p>
        <div>
          <input type='radio' name='status' id='pendente'/>
          <label for='pendente'>P E N D E N T E</label>
          <input type='radio' name='status' id='andamento'/>
          <label for='andamento'>E M A N D A M E N T O</label>
          <input type='radio' name='status' id='Concluído'/>
          <label for='Concluído'>C O N C L U I D O</label>
        </div>
      </>
    )
  }
}

export default TaskCard;