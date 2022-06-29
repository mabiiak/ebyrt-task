import { Router } from 'express';
import createNewTaks from '../controllers/createNewTask.js';

const routeTasks = Router();

routeTasks.post('/', createNewTaks);

routeTasks.get('/', (req, res) => {
  res.status(200).json({ message: 'teste' })
})

export default routeTasks;
