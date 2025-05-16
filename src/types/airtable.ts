export interface Collaborator {
	id: string;
	email: string;
	name: string
	profilePicUrl?: string
}

export interface LinkToAnotherRecord {
	id: string;
	name: string
}
