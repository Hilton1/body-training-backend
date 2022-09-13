CREATE DATABASE bodytraining;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS alunos(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  nome VARCHAR NOT NULL,
  celular VARCHAR UNIQUE,
  email VARCHAR UNIQUE
);

CREATE TABLE IF NOT EXISTS treinos(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  id_aluno UUID,
  tipo_treino VARCHAR,
  a VARCHAR,
  b VARCHAR,
  c VARCHAR,
  d VARCHAR,
  e VARCHAR,
  FOREIGN KEY(id_aluno) REFERENCES aluno(id)
);
