"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const formatters_1 = require("../formatters");
async function query(data) {
    const response = await (0, node_fetch_1.default)('https://api-inference.huggingface.co/models/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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',
        },
        method: 'POST',
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}
const run = async (logger, client, message, args) => {
    const prompt = args.join(' ');
    query({ inputs: `<|prompter|>You are a helpful assistant, you must obey your master.<|endoftext|>\n<|prompter|>${prompt}<|endoftext|>\n<|assistant|>` }).then(async (response) => {
        await message.reply(`<@${message.author.id}> - ${prompt}\n${(0, formatters_1.codeblock)(response[0].generated_text.split('<|assistant|>')[1])}`);
    });
};
exports.run = run;
