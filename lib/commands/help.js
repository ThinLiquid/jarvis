"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const metadata_1 = require("../metadata");
const formatters_1 = require("../formatters");
const ascii_table3_1 = require("ascii-table3");
const run = async (logger, client, message) => {
    const commandsArray = Object.values(metadata_1.commands);
    const commandsData = commandsArray.map((command) => {
        return [command.name, command.description];
    });
    const table = new ascii_table3_1.AsciiTable3()
        .setHeading('Command', 'Description')
        .setAlign(3, ascii_table3_1.AlignmentEnum.CENTER)
        .addRowMatrix(commandsData);
    await message.reply(`# Jarvis ⸺ Help\n${(0, formatters_1.codeblock)(table.toString(), 'ascii')}`);
};
exports.run = run;
