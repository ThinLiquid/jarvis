import Logger from '@ptkdev/logger';
import { Client, Message } from 'discord.js-selfbot-v13';

export const metadata = {
	name: 'ping',
	description: 'Check bot ping.',
};

export const run = (logger: Logger, client: Client, message: Message): void => {
	message.reply('pong');
};