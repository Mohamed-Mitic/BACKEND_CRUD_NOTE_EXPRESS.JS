const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'note_db'
})

mysqlPool.query("SELECT 1")
    .then(data => console.log(data))
    
    .catch(err => console.log('Erreur de connexion au db. \n' + erre))

module.exports = mysqlPool