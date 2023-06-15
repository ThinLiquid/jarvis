"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const run = async (logger, client, message, args) => {
    let i = -1;
    const messages = await message.channel.messages.fetch();
    messages.forEach(async (msg) => {
        if (args) {
            if (i == parseInt(args[0]))
                return;
            i += 1;
        }
        if (msg.deletable === true)
            await msg.delete().catch();
    });
};
exports.run = run;
