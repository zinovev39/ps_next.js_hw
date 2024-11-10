'use client';

import { usePathname } from 'next/navigation';
import { LikeButton } from '@/components';
import { getPostById } from '@/api/post';
import { useEffect, useState } from 'react';
import { Post } from '@/interfaces/post.interface';

export default function BlogCard() {
	const [post, setPost] = useState<Post>();
	const [like, setLike] = useState<boolean>(false);

	const pathname = usePathname();

	useEffect(() => {
		const fetchPost = async () => {
			const postId = Number(pathname.split('/').pop());
			const postData = await getPostById(postId);
			setPost(postData);
		};

		fetchPost();
	}, [pathname]);

	const handleLikeChange = (newLikeState: boolean) => {
		setLike(newLikeState);

		if (post) {
			localStorage.setItem(
				`liked-post-${post.id}`,
				newLikeState ? 'true' : 'false'
			);
		}
	};

	return (
		<div>
			<p>UserId - {post?.userId}</p>
			<p>PostId - {post?.id}</p>
			<p>Title - {post?.title}</p>
			<p>Body - {post?.body}</p>
			<LikeButton like={like} setLike={handleLikeChange} postId={post?.id} />
		</div>
	);
}
