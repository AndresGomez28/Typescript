"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 4.1.1 import
const export_1 = require("./export");
console.log((0, export_1.sum)(22, 33));
// 4.1.2 import
const export_2 = __importDefault(require("./export"));
console.log((0, export_2.default)(33, 44));
