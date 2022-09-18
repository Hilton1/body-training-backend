const db = require('../../database');

class TreinosRepository {
  async findAll(id) {
    const rows = await db.query('SELECT * FROM treinos WHERE id_aluno = $1', [id]);
    return rows;
  }
}

module.exports = new TreinosRepository();
