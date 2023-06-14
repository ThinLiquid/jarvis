export const events = <ClientEvents>[
	{ file: 'events/ready.ts' },
	{ file: 'events/messageCreate.ts' },
];

export const commands = <Commands>{
	ping: { file: 'commands/ping.ts', name: 'ping', description: 'Replies with pong!' },
	help: { file: 'commands/help.ts', name: 'help', description: 'Shows commands!' },
};