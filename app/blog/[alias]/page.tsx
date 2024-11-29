'use client';

import styles from './page.module.css';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getCommentById } from '@/api/comment';
import { getPostById } from '@/api/post';
import { Post } from '@/interfaces/post.interface';
import { Comment } from '@/interfaces/review.interface';

import {
	BlogCardHint,
	Htag,
	LikeButton,
	LikesCount,
	Ptag,
	Review,
	ReviewForm,
} from '@/components';

export default function BlogCard() {
	const [post, setPost] = useState<Post>();
	const [reviewData, setReviewData] = useState<Comment>();
	const [like, setLike] = useState<boolean>(false);

	const { category, hint, readingTime, likes } = post || {};

	const pathname = usePathname();

	useEffect(() => {
		const fetchData = async () => {
			const postId = Number(pathname.split('/').pop());
			const postData = await getPostById(postId);
			setPost(postData);

			const reviewData = await getCommentById(postId);
			setReviewData(reviewData);
		};

		fetchData();
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

	if (!post) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.cardDetails}>
			<Htag tag='h1'>
				{post ? post.title.charAt(0).toUpperCase() + post.title.slice(1) : ''}
			</Htag>
			<div className={styles.hintContainer}>
				<div className={styles.blogInfo}>
					<BlogCardHint color='text-small'>{category}</BlogCardHint>
					<span className={styles.dotSeparator}>.</span>
					<BlogCardHint>{hint}</BlogCardHint>
					<span className={styles.dotSeparator}>.</span>
					<BlogCardHint>{readingTime}</BlogCardHint>
					<span className={styles.dotSeparator}>.</span>
				</div>
				<LikesCount>{likes}</LikesCount>
			</div>
			<div className={styles.cardImage}>
				<Image
					src='/card/card-image.png'
					alt='Card picture'
					width={687}
					height={440}
					priority
				/>
			</div>
			<Ptag
				size='cardDetailsDescription'
				color='textSecondary'
				className={styles.bodyDescription}
			>
				{post ? post.body.charAt(0).toUpperCase() + post.body.slice(1) : ''}
			</Ptag>
			<div className={styles.like}>
				<Ptag size='cardDetailsLike' color='textPrimary'>
					Понравилось? Жми
				</Ptag>
				<LikeButton like={like} setLike={handleLikeChange} postId={post?.id} />
			</div>
			<div className={styles.comments}>
				<Htag tag='h2'>Комментарии</Htag>
				<Review review={reviewData} />
				<ReviewForm postId={post.id} />
			</div>
		</div>
	);
}
