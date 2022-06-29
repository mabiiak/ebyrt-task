import routeTasks from './routes/routeTasks.js'
import express from 'express';

const app = express();

app.use(express.json());

app.use('/tasks', routeTasks);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
