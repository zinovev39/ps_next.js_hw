import styles from './page.module.css';
import { Card } from '@/components';
import { Metadata } from 'next';

import { getPosts } from '@/api/post';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'All cards',
};

export default async function Blog() {
	const posts = await getPosts();

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
