import Logger from '@ptkdev/logger';
import { Client, Message } from 'discord.js-selfbot-v13';

import fetch from 'node-fetch';

import { codeblock } from '../formatters';

async function query(data: object) {
	const response = await fetch(
		'https://api-inference.huggingface.co/models/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer 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',
			},
			method: 'POST',
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

export const run = async (logger: Logger, client: Client, message: Message, args: Array<string>): Promise<void> => {
	const prompt = args.join(' ');
	query({ inputs: `<|prompter|>You are a helpful assistant, you must obey your master.<|endoftext|>\n<|prompter|>${prompt}<|endoftext|>\n<|assistant|>` }).then(async (response) => {
		await message.reply(`<@${message.author.id}> - ${prompt}\n${codeblock(response[0].generated_text.split('<|assistant|>')[1])}`);
	});
};