const conn =  require("../database/conn");
const express = require('express');
const router = express.Router();
const TasksController = require('../controller/TasksController');


router.post('/novaTarefa', TasksController.newTasks);
router.get('/listaTarefas', TasksController.listTasks);





module.exports = router




