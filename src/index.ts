import dotenv from 'dotenv';
import Logger from '@ptkdev/logger';
import { Client } from 'discord.js-selfbot-v13';

import { events } from './metadata';

dotenv.config();

const logger = new Logger();
const client = new Client({ checkUpdate: false });

if (!process.env.PREFIX) {
	logger.error('Please change the "PREFIX" value in the .env file.');
	process.exit(0);
}

if (!process.env.TOKEN) {
	logger.error('Please change the "TOKEN" value in the .env file.');
	process.exit(0);
}

events.forEach(async (event: ClientEvent): Promise<void> => {
	const eventFile = await import('./' + event.file);

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