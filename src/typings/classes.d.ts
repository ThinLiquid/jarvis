declare class BaseModule {
	public file: string;
	constructor(file: string) {
		this.file = file;
	}
}

declare class ClientEvent extends BaseModule {
	constructor(file: string) {
		super(file);
	}
}

declare class Command extends BaseModule {
	name: string; description: string;
	constructor(file: string, name: string, description: string) {
		super(file);
		this.name = name;
		this.description = description;
	}
}