import styles from './page.module.css';
import { Card } from '@/components';
import { Post } from '@/interfaces/post.interface';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'All cards',
};

export default async function Blog() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts: Post[] = await res.json();

	if (!posts) return <div>Loading...</div>;

	return (
		<section>
			<div className={styles.wrapper}>
				{posts.slice(0, 6).map(post => (
					<Card key={post.id} post={post} />
				))}
			</div>
		</section>
	);
}
