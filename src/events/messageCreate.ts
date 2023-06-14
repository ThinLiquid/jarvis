import Logger from '@ptkdev/logger';
import { Client, Message } from 'discord.js-selfbot-v13';

import { handleMessage } from '../handlers';

export const metadata = {
	event: 'messageCreate',
	type: 'on',
};

export const run = async (logger: Logger, client: Client, message: Message): Promise<void> => {
	await handleMessage(logger, client, message);
};