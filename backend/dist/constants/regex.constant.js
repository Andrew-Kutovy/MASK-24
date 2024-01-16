"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexConstant = void 0;
exports.regexConstant = {
    EMAIL: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
    PASSWORD: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
};
