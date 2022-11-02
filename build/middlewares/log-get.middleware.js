"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logGetMiddleware = void 0;
const logGetMiddleware = (req, res, next) => {
    console.log("LISTAR TODAS TASKS");
    next();
};
exports.logGetMiddleware = logGetMiddleware;
