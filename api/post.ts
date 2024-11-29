import { Post } from '@/interfaces/post.interface';

export async function getPosts(): Promise<Post[]> {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts: Post[] = await res.json();

	for (const post of posts) {
		post.category = 'Front-end';
		post.hint = '1 месяц назад';
		post.likes = 12;
		post.readingTime = '3 минуты';
	}

	return posts;
}

export async function getPostById(id: number): Promise<Post> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await res.json();
	post.category = 'Front-end';
	post.hint = '1 месяц назад';
	post.likes = 12;
	post.readingTime = '3 минуты';

	return post;
}
