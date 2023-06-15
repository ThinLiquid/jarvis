"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = exports.events = void 0;
exports.events = [
    { file: 'events/ready' },
    { file: 'events/messageCreate' },
];
exports.commands = {
    help: { file: 'commands/help', name: 'help', description: 'Shows commands!' },
    ping: { file: 'commands/ping', name: 'ping', description: 'Replies with pong!' },
    ask: { file: 'commands/ask', name: 'ask', description: 'Ask AI your questions!' },
    clear: { file: 'commands/clear', name: 'clear', description: 'Clear messages in a channel!' },
};
