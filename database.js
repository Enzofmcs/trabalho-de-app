const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'VocêComeuPãoDeQueijo?Só1',
  database: 'sistema_usuario'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;