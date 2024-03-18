const { response } = require('express')
const database = require('../database/conn')


class TasksController{

    newTasks(req, res){
        
        const {tarefas, descricao, responsavel} = req.body
        
        // console.log(tarefas, descricao, responsavel);


        database.insert({tarefas, descricao, responsavel}).table('tasks').then(data=>{
            res.json({message:'Tarefa criada!'})
        }).catch(error =>{
            res.json({message:"Erro ao criar a tarefa.!"})
           
        })


    }


    listTasks(req, res){
        database.select("*").table('tasks').then(tarefas=>{
            res.json(tarefas)
        }).catch(error =>{
            res.json({message: "Error ao carregar as listar de tarefas!"})
        })
    }






    

}

module.exports = new TasksController()

