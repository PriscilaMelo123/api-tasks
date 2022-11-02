"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const tasksList_1 = require("../data/tasksList");
const tasks_1 = require("../models/tasks");
class TasksController {
    list(description, detail) {
        let lista = tasksList_1.tasksList;
        if (description) {
            lista = tasksList_1.tasksList.filter((item) => item.description === description);
        }
        if (detail) {
            lista = tasksList_1.tasksList.filter((item) => item.detail == detail);
        }
        let listaRetorno = lista.map((tasks) => {
            return tasks.getTasks();
        });
        return listaRetorno;
    }
    update(id, description, detail) {
        const tasks = tasksList_1.tasksList.find((item) => item.id === id);
        if (!tasks) {
            return undefined;
        }
        tasks.description = description;
        tasks.detail = detail;
        return tasksList_1.tasksList;
    }
    // public createTasks(req: Request, res: Response) {
    //   const { description, detail } = req.body;
    //   const { id } = req.params;
    //   const tasks = tasksList.find((task) => task.id === id);
    //   if (!tasks) {
    //     return res.status(404).json({ message: "Task não encontrado!" });
    //   }
    //   tasksList.push(tasks);
    //   return tasksList;
    // }
    create(description, detail) {
        const task = new tasks_1.Tasks(description, detail);
        tasksList_1.tasksList.push(task);
        return tasksList_1.tasksList;
    }
}
exports.TasksController = TasksController;
