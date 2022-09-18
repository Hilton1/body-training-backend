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

  async store(request, response) {
    const { id } = request.params;
    const {
      tipoTreino, a, b, c, d, e,
    } = request.body;

    const aluno = await AlunosRepository.findById(id);

    if (!aluno) {
      return response.status(404).json({ error: 'Aluno não encontrado!' });
    }

    const treinoJaExiste = await TreinosRepository.findAll(id);

    if (treinoJaExiste) {
      return response.status(400).json({ error: 'Já existe um treino cadastrado para esse aluno!' });
    }

    const treino = await TreinosRepository.create(id, {
      tipoTreino, a, b, c, d, e,
    });

    return response.json(treino);
  }
}

module.exports = new TreinoController();
