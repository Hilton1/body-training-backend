const db = require('../../database');

class TreinosRepository {
  async findAll(id) {
    const [row] = await db.query('SELECT * FROM treinos WHERE id_aluno = $1', [id]);
    return row;
  }

  async create(id, {
    tipoTreino, a = null, b = null, c = null, d = null, e = null,
  }) {
    const treino = await db.query(`
      INSERT INTO treinos (id_aluno, tipo_treino, a, b, c, d, e)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `, [id, tipoTreino, a, b, c, d, e]);

    return treino;
  }

  async update(id, {
    tipoTreino, a, b, c, d, e,
  }) {
    const [row] = await db.query(`
      UPDATE treinos
      set tipo_treino = $1,
      a = $2,
      b = $3,
      c = $4,
      d = $5,
      e = $6
      WHERE id_aluno = $7
      RETURNING *
    `, [tipoTreino, a, b, c, d, e, id]);

    return row;
  }
}

module.exports = new TreinosRepository();
