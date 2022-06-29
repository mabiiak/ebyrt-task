import create from '../models/task.js';

async function createNewTaks(req, res) {
  const newTask = await create(req.body);
  console.log('ct', newTask);
  if (newTask === undefined) return res.status(401).json({ message: 'Item não criado' })
  res.status(201).json({ newTask })
}

export default createNewTaks;
