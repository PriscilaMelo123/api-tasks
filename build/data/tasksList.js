"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userList = exports.tasksList = void 0;
const tasks_1 = require("../models/tasks");
const user_1 = require("../models/user");
exports.tasksList = [
    new tasks_1.Tasks("teste 01", "teste 01"),
    new tasks_1.Tasks("teste 02", "teste 02"),
];
exports.userList = [
    new user_1.User("ricardo@teste.com", "0987!", "0987!", exports.tasksList),
    new user_1.User("teste@teste.com", "1234@", "1234@", exports.tasksList),
];
