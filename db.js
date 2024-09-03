const { pool } = require('pg')
const pool = new pool({
    host: 'db',
    port: 5432,
    password: 'password123',
    database: 'db123'
})

module.exports = pool 