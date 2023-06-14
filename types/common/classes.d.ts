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
	constructor(file: string) {
		super(file);
	}
}