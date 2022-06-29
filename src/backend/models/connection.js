import { createPool } from 'mysql2/promise';

const connection = createPool({
  host: 3001,
  user: 'root',
  password: 'password',
  database: 'EbyrtTasks',
});

export default connection;