"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bold = exports.italic = exports.codeblock = void 0;
const codeblock = (content, type = '') => {
    return '```' + type + '\n' + content + '\n```';
};
exports.codeblock = codeblock;
const italic = (content) => {
    return '*' + content + '*';
};
exports.italic = italic;
const bold = (content) => {
    return '**' + content + '**';
};
exports.bold = bold;
