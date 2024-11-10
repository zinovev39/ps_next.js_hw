'use client';

import { useState } from 'react';
import { LikeButton } from '@/components';

export default function BlogCard() {
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
		<div>
			<LikeButton like={like} onLikeChange={handleLikeChange} />
		</div>
	);
}
