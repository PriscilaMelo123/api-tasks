"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    _name;
    _pass;
    _Rpass;
    _tasks;
    _userId;
    constructor(_name, _pass, _Rpass, _tasks) {
        this._name = _name;
        this._pass = _pass;
        this._Rpass = _Rpass;
        this._tasks = _tasks;
        this._userId = (0, uuid_1.v4)();
        this._tasks = this._tasks;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get pass() {
        return this._pass;
    }
    set pass(pass) {
        this._pass = pass;
    }
    get Rpass() {
        return this._Rpass;
    }
    set Rpass(Rpass) {
        this._Rpass = Rpass;
    }
    get userId() {
        return this._userId;
    }
    // public get tasks(): Tasks {
    //   return this._tasks
    // }
    getUser() {
        return {
            userId: this._userId,
            name: this._name,
            pass: this._pass,
            Rpass: this._Rpass,
            tasks: this._tasks,
        };
    }
}
exports.User = User;
