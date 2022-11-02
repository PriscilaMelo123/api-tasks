"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tasksList_1 = require("../data/tasksList");
const user_1 = require("../models/user");
class UserController {
    list(name, userId, tasks) {
        let lista = tasksList_1.userList;
        if (name) {
            lista = tasksList_1.userList.filter((item) => item.name === name);
        }
        let listaRetorno = lista.map((tasks) => {
            return tasks.getUser();
        });
        return listaRetorno;
    }
    // public update(userId: string, tasks: Tasks) {
    //   const user = userList.find((item) => item.userId === userId);
    //   if (!user) {
    //     return undefined;
    //   }
    //   user.tasks? = tasks:Tasks
    //   return userList;
    // }
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
    create(name, pass, Rpass) {
        const user = new user_1.User(name, pass, Rpass);
        tasksList_1.userList.push(user);
        return tasksList_1.userList;
    }
}
exports.UserController = UserController;
