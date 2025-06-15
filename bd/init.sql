CREATE DATABASE IF NOT EXISTS usuarios_db;
USE usuarios_db;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    documento VARCHAR(20),
    correo VARCHAR(100),
    direccion VARCHAR(100),
    localidad VARCHAR(50),
    provincia VARCHAR(50)
);
