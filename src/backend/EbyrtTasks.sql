CREATE DATABASE EbyrtTasks;

USE EbyrtTasks;

CREATE TABLE tasks (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    descricao VARCHAR(30),
    status VARCHAR(30) NOT NULL,
    data DATE
)
