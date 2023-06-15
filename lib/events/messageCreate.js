"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.metadata = void 0;
const handlers_1 = require("../handlers");
exports.metadata = {
    event: 'messageCreate',
    type: 'on',
};
const run = async (logger, client, message) => {
    await (0, handlers_1.handleMessage)(logger, client, message);
};
exports.run = run;
