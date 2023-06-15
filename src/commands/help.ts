import Logger from '@ptkdev/logger';
import { Client, Message } from 'discord.js-selfbot-v13';
import { commands } from '../metadata';

import { codeblock } from '../formatters';

import { AlignmentEnum, AsciiTable3 } from 'ascii-table3';

export const run = async (logger: Logger, client: Client, message: Message): Promise<void> => {
	const commandsArray = Object.values(commands);
	const commandsData: any = commandsArray.map((command: Command): Array<Array<string>> => {
		return [command.name, command.description];
	});

	const table = new AsciiTable3()
		.setHeading('Command', 'Description')
		.setAlign(3, AlignmentEnum.CENTER)
		.addRowMatrix(commandsData);

	await message.reply(`# Jarvis ⸺ Help\n${codeblock(table.toString(), 'ascii')}`);
};