export const events = <ClientEvents>[
	{ file: 'events/ready.ts' },
	{ file: 'events/messageCreate.ts' },
];

export const commands = <Commands>{
	help: { file: 'commands/help.ts', name: 'help', description: 'Shows commands!' },
	ping: { file: 'commands/ping.ts', name: 'ping', description: 'Replies with pong!' },
	ask: { file: 'commands/ask.ts', name: 'ask', description: 'Ask AI your questions!' },
	clear: { file: 'commands/clear.ts', name: 'clear', description: 'Clear messages in a channel!' },
};