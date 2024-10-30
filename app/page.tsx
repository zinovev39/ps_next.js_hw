'use client';

import { Card, LikeButton } from '@/components';
//import { Metadata } from 'next';
import { useState } from 'react';

// export const metadata: Metadata = {
// 	title: 'My project',
// 	description: 'Description',
// };

export default function Home() {
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
	return (
		<main>
			<section>
				<Card />
				<LikeButton like={like} setLike={handleLikeChange} />
			</section>
		</main>
	);
}
