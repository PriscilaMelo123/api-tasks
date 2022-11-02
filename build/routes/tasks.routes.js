"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRoutes = void 0;
const express_1 = require("express");
const tasks_controller_1 = require("../controllers/tasks.controller");
const tasksList_1 = require("../data/tasksList");
const log_middleware_1 = require("../middlewares/log.middleware");
const tasksRoutes = (0, express_1.Router)();
exports.tasksRoutes = tasksRoutes;
tasksRoutes.use(log_middleware_1.logMiddleware);
// GET http://localhost:3333/tasks/ (com query description e detail)
// Listar todas tasks filtrando por description e detail
tasksRoutes.get("/", (req, res) => {
    try {
        const { description, detail } = req.query;
        const controller = new tasks_controller_1.TasksController();
        const result = controller.list(description, detail);
        return res.status(200).send({
            ok: true,
            message: "Tasks successfully listed",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).send({
            ok: false,
            message: "Instabilidade no servidor",
            error: error.toString(),
        });
    }
});
// GET http://localhost:3333/tasks/id
// Route param
tasksRoutes.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        let tasks = tasksList_1.tasksList.find((item) => item.id === id);
        if (!tasks) {
            return res.status(404).send({
                ok: false,
                message: "Tasks not found",
            });
        }
        return res.status(200).send({
            ok: true,
            message: "Tasks successfully obtained",
            data: tasks,
        });
    }
    catch (error) {
        return res.status(500).send({
            ok: false,
            message: "Instabilidade no servidor",
            error: error.toString(),
        });
    }
});
// POST http://localhost:3333/tasks
// Parâmetros => body
tasksRoutes.post("/", (req, res) => {
    try {
        const { description, detail } = req.body;
        if (!description) {
            return res.status(400).send({
                ok: false,
                message: "Description not provided",
            });
        }
        if (!detail) {
            return res.status(400).send({
                ok: false,
                message: "Detail not provided",
            });
        }
        new tasks_controller_1.TasksController().create(description, detail);
        return res.status(201).send({
            ok: true,
            message: "Tasks successfully created",
            data: tasksList_1.tasksList,
        });
    }
    catch (error) {
        return res.status(500).send({
            ok: false,
            message: "Instabilidade no servidor",
            error: error.toString(),
        });
    }
});
// DELETE http://localhost:3333/tasks/id
// Route param
tasksRoutes.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        let tasksIndex = tasksList_1.tasksList.findIndex((item) => item.id === id);
        if (tasksIndex < 0) {
            return res.status(404).send({
                ok: false,
                message: "Tasks not found",
            });
        }
        tasksList_1.tasksList.splice(tasksIndex, 1);
        return res.status(200).send({
            ok: true,
            message: "Tasks successfully deleted",
            data: tasksList_1.tasksList,
        });
    }
    catch (error) {
        return res.status(500).send({
            ok: false,
            message: "Instabilidade no servidor",
            error: error.toString(),
        });
    }
});
// PUT http://localhost:3333/tasks/id
// id => route param
// dados alteracao => body
tasksRoutes.put("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { description, detail } = req.body;
        const controller = new tasks_controller_1.TasksController();
        const result = controller.update(id, description, detail);
        if (!result) {
            return res.status(404).send({
                ok: false,
                message: "Task não existe",
            });
        }
        return res.status(200).send({
            ok: true,
            message: "Task atualizado com sucesso",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).send({
            ok: false,
            message: "Instabilidade no servidor",
            error: error.toString(),
        });
    }
});
