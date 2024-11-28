import { Comment } from '@/interfaces/review.interface';

export async function getCommentById(id: number): Promise<Comment> {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/comments/${id}`
	);
	const comment = await res.json();

	return comment;
}
