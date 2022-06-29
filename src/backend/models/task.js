import connection from './connection.js';

export default async function create(newTask) {
  const query = `INSERT INTO tasks (titulo, descricao, status, data)
  VALUES (?, ?, ?, ?)`;

  const { titulo, descricao, status, data } = newTask;

  if(titulo && descricao && status && data) {
    const [createNewTask] = await connection.execute(query, [newTask.titulo, newTask.descricao, newTask.status, newTask.data]);
    
    return createNewTask;
  }
}
