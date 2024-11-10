'use client';

import styles from './page.module.css';
import { Card, LikeButton } from '@/components';
//import { Metadata } from 'next';
import { useState } from 'react';

// export const metadata: Metadata = {
// 	title: 'Blog',
// 	description: 'Description',
// };

export default function Blog() {
	const [like, setLike] = useState<boolean>(false);
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

	const cards = Array(3).fill(null);
	return (
		<section>
			<div className={styles.wrapper}>
				{cards.map((_, index) => (
					<Card key={index} />
				))}
				<LikeButton like={like} setLike={handleLikeChange} />
			</div>
		</section>
	);
}
