const { Router } = require('express');

const AlunoController = require('./app/controllers/AlunoController');

const router = Router();

router.get('/alunos', AlunoController.index);
router.get('/alunos/:id', AlunoController.show);
router.post('/alunos', AlunoController.store);
router.put('/alunos/:id', AlunoController.update);

module.exports = router;
