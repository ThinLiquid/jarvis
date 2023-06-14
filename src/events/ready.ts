import Logger from '@ptkdev/logger';
import { Client } from 'discord.js-selfbot-v13';

export const metadata = <EventMetadata>{
	event: 'ready',
	type: 'once',
};

export const run = async (logger: Logger, client: Client): Promise<void> => {
	logger.info(`${client.user?.tag} is ready!`);
};