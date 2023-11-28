import mysql from 'mysql2/promise' 

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Betagera1303',
  database: 'api_node',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

export default pool