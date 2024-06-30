const mysql = require('mysql2');
const pool = mysql.createPool({
 connectionLimit: 10,
 host: 'localhost',
 user: 'root',
 password: '#170GAB@3!2#ABCDmiguel!#@',
 database: 'cardgame'
});

function operator(operation, username = null, newusername = null, password = null, money = null, email = null) {
  return new Promise((resolve, reject) => {
    let sql = '';
    let params = [];

    switch (operation) {
      case 'create':
        sql = "INSERT INTO `cardgame`.`player` (`username`, `password`, `money`, `email`) VALUES (?,?,?,?);";
        params = [username, password, money, email];
        break;
      case 'read':
        sql = "SELECT * FROM `cardgame`.`player` WHERE `username` =?;";
        params = [username];
        break;
      case 'update':
        sql = "UPDATE `cardgame`.`player` SET `username` =?, `password` =?, `money` =?, `email` =? WHERE `username` =?;";
        params = [newusername, password, money, email, username];
        break;
      case 'delete':
        sql = "DELETE FROM `cardgame`.`player` WHERE `username` =?;";
        params = [username];
        break;
      default:
        console.error('Invalid operation type');
        reject(new Error('Invalid operation type'));
        return;
    }

    pool.query(sql, params, function(err, result) {
      if (err) {
        console.error(`Error executing ${operation} operation`, err);
        reject(err);
      } else {
        console.log(`Player ${operation} successfully`);
        //console.log('opetator result ; ',result);
        resolve(result);
      }
    });
  });
}

// Examplos:
// Criar jogador
//operator('create', 'newUser', 'newPlayerPassword', 100, 'newPlayerEmail');

// Ler jogardor
//operator('read', 'existingPlayerUsername');

// Update jogador
//operator('update', 'existingPlayerUsername', 'newUsername', 'newPassword', 200, 'newEmail');

// Deletar
//operator('delete', 'existingPlayerUsername');

module.exports = operator;


