import { Encrypted } from 'eth-crypto';

export type IPCFile = {
	name: string;
	content: string;
	created_at: number;
	key: string;
};

export type IPCFileContact = {
	hash: string;
	key: Encrypted;
};

export type IPCContact = {
	name: string;
	address: string;
	publicKey: string;
	files: IPCFileContact[];
};

export type ResponseType = {
	success: boolean;
	message: string;
};