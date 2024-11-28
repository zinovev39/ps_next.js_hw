export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
	category?: string;
	hint?: string;
	likes?: number;
	readingTime?: string;
}
