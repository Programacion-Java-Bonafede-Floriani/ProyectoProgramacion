const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '1234',
  database: 'usuarios_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conectado a MySQL');
  }
});

app.post('/registro', (req, res) => {
  const { nombre, documento, correo, direccion, localidad, provincia } = req.body;
  const sql = 'INSERT INTO usuarios (nombre, documento, correo, direccion, localidad, provincia) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [nombre, documento, correo, direccion, localidad, provincia], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al registrar' });
    } else {
      res.json({ message: 'Usuario registrado exitosamente' });
    }
  });
});

app.listen(3000, () => console.log('Backend corriendo en puerto 3000'));

