const db = require('../../database');

class AlunosRepository {
  async findAll(orderBy = 'asc') {
    const direction = orderBy.toUpperCase === 'ASC' ? 'ASC' : 'DESC';
    const rows = await db.query(`
      SELECT *
      FROM alunos
      ORDER BY nome ${direction}
    `);
    return rows;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM alunos WHERE email = $1', [email]);
    return row;
  }

  async create({
    nome, email, celular,
  }) {
    const aluno = await db.query(`
      INSERT INTO alunos (nome, email, celular)
      values ($1, $2, $3)
      RETURNING *
    `, [nome, email, celular]);

    return aluno;
  }
}

module.exports = new AlunosRepository();
