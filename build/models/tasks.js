"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaTasks = exports.Tasks = void 0;
const uuid_1 = require("uuid");
class Tasks {
    _description;
    _detail;
    _id;
    constructor(_description, _detail) {
        this._description = _description;
        this._detail = _detail;
        this._id = (0, uuid_1.v4)();
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get detail() {
        return this._detail;
    }
    set detail(detail) {
        this._detail = detail;
    }
    get id() {
        return this._id;
    }
    getTasks() {
        return {
            id: this._id,
            description: this._description,
            detail: this._detail,
        };
    }
}
exports.Tasks = Tasks;
class listaTasks extends Tasks {
    listaTasks = Tasks;
}
exports.listaTasks = listaTasks;
