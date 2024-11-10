import { Post } from '@/interfaces/post.interface';

export async function getPosts(): Promise<Post[]> {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	return res.json();
}

export async function getPostById(id: number): Promise<Post> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return res.json();
}
