"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const formatters_1 = require("../formatters");
const run = async (logger, client, message) => {
    await message.reply(`# Jarvis ⸺ Ping\n${(0, formatters_1.codeblock)(`Roundtrip Latency: ${Date.now() - message.createdTimestamp}ms\nAPI Latency: ${Math.round(client.ws.ping)}ms`, 'ascii')}`);
};
exports.run = run;
