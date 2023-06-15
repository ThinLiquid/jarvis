"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.metadata = void 0;
exports.metadata = {
    event: 'ready',
    type: 'once',
};
const run = async (logger, client) => {
    logger.info(`${client.user?.tag} is ready!`);
};
exports.run = run;
