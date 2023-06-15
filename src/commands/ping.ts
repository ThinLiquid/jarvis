import Logger from '@ptkdev/logger';
import { Client, Message } from 'discord.js-selfbot-v13';

import { codeblock } from '../formatters';

export const run = async (logger: Logger, client: Client, message: Message): Promise<void> => {
	await message.reply(`# Jarvis ⸺ Ping\n${codeblock(`Roundtrip Latency: ${Date.now() - message.createdTimestamp}ms\nAPI Latency: ${Math.round(client.ws.ping)}ms`, 'ascii')}`);
};