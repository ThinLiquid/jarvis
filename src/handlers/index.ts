import Logger from '@ptkdev/logger';
import { Client, Message } from 'discord.js-selfbot-v13';

import { commands } from '../metadata';

export const handleMessage = async (logger: Logger, client: Client, message: Message): Promise<void> => {
	if (!process.env.PREFIX) return;
	if (!message.content.startsWith(process.env.PREFIX)) return;

	const splitCommand = message.content.replace(process.env.PREFIX, '').split(' ');
	const command = splitCommand[0];
	splitCommand.shift();

	if (!commands[command]) return;

	const cmd = await import('../' + commands[command].file);
	cmd.run(logger, client, message, splitCommand);
	logger.debug(message.content);
};