import Logger from '@ptkdev/logger';
import { Client, Message } from 'discord.js-selfbot-v13';

export const run = async (logger: Logger, client: Client, message: Message, args: Array<string>): Promise<void> => {
	let i = -1;

	const messages = await message.channel.messages.fetch();
	messages.forEach(async (msg: Message) => {
		if (args) {
			if (i == parseInt(args[0])) return;
			i += 1;
		}
		if (msg.deletable === true) await msg.delete().catch();
	});
};