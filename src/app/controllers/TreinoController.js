const TreinosRepository = require('../repositories/TreinosRepository');
const AlunosRepository = require('../repositories/AlunosRepository');

class TreinoController {
  async index(request, response) {
    const { id } = request.params;

    const aluno = await AlunosRepository.findById(id);

    if (!aluno) {
      return response.status(404).json({ error: 'Aluno não encontrado!' });
    }

    const treinos = await TreinosRepository.findAll(id);

    return response.json(treinos);
  }
}

module.exports = new TreinoController();
