export const events = <ClientEvents>[
	{ file: 'events/ready' },
	{ file: 'events/messageCreate' },
];

export const commands = <Commands>{
	help: { file: 'commands/help', name: 'help', description: 'Shows commands!' },
	ping: { file: 'commands/ping', name: 'ping', description: 'Replies with pong!' },
	ask: { file: 'commands/ask', name: 'ask', description: 'Ask AI your questions!' },
	clear: { file: 'commands/clear', name: 'clear', description: 'Clear messages in a channel!' },
};