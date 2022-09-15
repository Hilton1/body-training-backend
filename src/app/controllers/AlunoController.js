const AlunosRepository = require('../repositories/AlunosRepository');

class AlunoController {
  async index(request, response) {
    const { orderBy } = request.query;
    const alunos = await AlunosRepository.findAll(orderBy);

    return response.json(alunos);
  }

  async show(request, response) {
    const { id } = request.params;

    const aluno = await AlunosRepository.findById(id);

    if (!aluno) {
      return response.status(404).json({ error: 'Aluno não encontrado!' });
    }

    return response.json(aluno);
  }

  async store(request, response) {
    const {
      nome, email, celular,
    } = request.body;

    if (!nome) {
      return response.status(400).json({ error: 'Nome é obrigatório!' });
    }
    const alunoJaExiste = await AlunosRepository.findByEmail(email);

    if (alunoJaExiste) {
      return response.status(400).json({ error: 'Email já está em uso!' });
    }

    const aluno = await AlunosRepository.create({
      nome, email, celular,
    });

    return response.json(aluno);
  }

  async update(request, response) {
    const { nome, email, celular } = request.body;
    const { id } = request.params;

    if (!nome) {
      return response.status(400).json({ error: 'Nome é obrigatório!' });
    }

    const alunoExiste = await AlunosRepository.findById(id);

    if (!alunoExiste) {
      return response.status(404).json({ error: 'Aluno não encontrado!' });
    }

    const aluno = await AlunosRepository.update(id, { nome, email, celular });

    return response.json(aluno);
  }

  // delete(request, response) {

  // }
}

module.exports = new AlunoController();
