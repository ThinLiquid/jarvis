export const codeblock = (content: string, type = ''): string => {
	return '```' + type + '\n' + content + '\n```';
};

export const italic = (content: string): string => {
	return '*' + content + '*';
};

export const bold = (content: string): string => {
	return '**' + content + '**';
};