"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("@ptkdev/logger"));
const discord_js_selfbot_v13_1 = require("discord.js-selfbot-v13");
const metadata_1 = require("./metadata");
const logger = new logger_1.default();
const client = new discord_js_selfbot_v13_1.Client({
    checkUpdate: false,
});
const start = () => {
    dotenv_1.default.config();
    if (!process.env.PREFIX) {
        logger.error('Please change the "PREFIX" value in the .env file.');
        process.exit(0);
    }
    if (!process.env.TOKEN) {
        logger.error('Please change the "TOKEN" value in the .env file.');
        process.exit(0);
    }
    metadata_1.events.forEach(async (event) => {
        const eventFile = await Promise.resolve(`${'./' + event.file}`).then(s => __importStar(require(s)));
        switch (eventFile.metadata.type) {
            case 'on':
                client.on(eventFile.metadata.event, (...data) => {
                    eventFile.run(logger, client, ...data);
                });
                break;
            case 'once':
                client.once(eventFile.metadata.event, (...data) => {
                    eventFile.run(logger, client, ...data);
                });
                break;
        }
    });
    client.login(process.env.TOKEN);
};
exports.start = start;
