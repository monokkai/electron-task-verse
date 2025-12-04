"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const App = () => {
    return (react_1.default.createElement(react_2.Box, { bg: "red.400" },
        react_1.default.createElement(react_2.Text, { as: "h1" }, "Hello World")));
};
exports.default = App;
