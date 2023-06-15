declare interface EventMetadata {
	event: string;
	type: EventType;
}

declare interface CommandMetadata {
	name: string;
	description: string;
}

declare interface BaseModule {
    file: string;
}

declare interface Commands { [key: string]: Command; }
declare type ClientEvents = ClientEvent[]