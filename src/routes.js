const { Router } = require('express');

const AlunoController = require('./app/controllers/AlunoController');

const router = Router();

router.get('/alunos', AlunoController.index);
router.post('/alunos', AlunoController.store);

module.exports = router;
