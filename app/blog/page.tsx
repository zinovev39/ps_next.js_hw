'use client';

import styles from './page.module.css';
import { Card, LikeButton } from '@/components';
//import { Metadata } from 'next';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
// 	title: 'Blog',
// 	description: 'Description',
// };

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export default function Blog() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [like, setLike] = useState<boolean>(false);

	// ! через getStaticProps выдает ошибку
	useEffect(() => {
		async function fetchPosts() {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await res.json();
			setPosts(data);
		}
		fetchPosts();
	}, []);

	const handleLikeChange = async (newLikeState: boolean) => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/1`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ like: newLikeState }),
				}
			);

			if (!response.ok) {
				throw new Error('Ошибка при обновлении лайка');
			}

			setLike(newLikeState);
		} catch (error) {
			console.error('Ошибка при обновлении лайка:', error);
		}
	};

	if (!posts) return <div>Loading...</div>;

	return (
		<section>
			<div className={styles.wrapper}>
				{posts.slice(0, 6).map(post => (
					<Card key={post.id} post={post} />
				))}
				<LikeButton like={like} setLike={handleLikeChange} />
			</div>
		</section>
	);
}
