"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const uuid_1 = require("uuid");
const user_controller_1 = require("../controllers/user.controller");
const tasksList_1 = require("../data/tasksList");
const log_middleware_1 = require("../middlewares/log.middleware");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.use(log_middleware_1.logMiddleware);
// GET http://localhost:3333/tasks/ (com query description e detail)
// Listar todas tasks filtrando por description e detail
userRoutes.get("/", (req, res) => {
    try {
        const { name, userId, tasks } = req.query;
        const controller = new user_controller_1.UserController();
        const result = controller.list(name, userId, tasks);
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
// POST http://localhost:3333/user
// Parâmetros => body
userRoutes.post("/", (req, res) => {
    try {
        const { name, pass, Rpass } = req.body;
        if (!name) {
            return res.status(400).send({
                ok: false,
                message: "Name not provided",
            });
        }
        if (!pass) {
            return res.status(400).send({
                ok: false,
                message: "Password not provided",
            });
        }
        new user_controller_1.UserController().create(name, pass, Rpass);
        return res.status(201).send({
            ok: true,
            message: "Successfully",
            data: tasksList_1.userList,
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
// POST http://localhost:3333/user
// Parâmetros => body
userRoutes.post("/login", (req, res) => {
    try {
        const { name, pass } = req.body;
        // const controller = new UserController();
        // const result = controller.list(
        //   name as string,
        //   userId as string,
        //   tasks as []
        // );
        if (!name) {
            return res.status(400).send({
                ok: false,
                message: "Name not provided",
            });
        }
        if (!pass) {
            return res.status(400).send({
                ok: false,
                message: "Password not provided",
            });
        }
        return res.status(201).send({
            ok: true,
            message: "Successfully",
            token: (0, uuid_1.v4)(),
            data: tasksList_1.userList,
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
