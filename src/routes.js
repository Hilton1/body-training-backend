const { Router } = require('express');

const AlunoController = require('./app/controllers/AlunoController');
const TreinoController = require('./app/controllers/TreinoController');

const router = Router();

router.get('/alunos', AlunoController.index);
router.get('/alunos/:id', AlunoController.show);
router.post('/alunos', AlunoController.store);
router.put('/alunos/:id', AlunoController.update);
router.delete('/alunos/:id', AlunoController.delete);

router.get('/alunos/:id/treinos', TreinoController.index);

module.exports = router;
