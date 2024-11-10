'use client';

import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './LikeButton.module.css';
import type { LikeButtonProps } from './LikeButton.props';
import LikeIcon from './icons/like.svg';

export const LikeButton = ({
	like,
	postId,
	setLike,
	...props
}: LikeButtonProps): JSX.Element => {
	const [isLiked, setIsLiked] = useState(like);

	useEffect(() => {
		const storedLikeStatus = localStorage.getItem(`liked-post-${postId}`);
		if (storedLikeStatus === 'true') {
			setIsLiked(true);
		} else {
			setIsLiked(false);
		}
	}, [postId]);

	const handleLikeClick = () => {
		const newLikeState = !isLiked;

		setIsLiked(newLikeState);
		localStorage.setItem(
			`liked-post-${postId}`,
			newLikeState ? 'true' : 'false'
		);
		setLike(newLikeState);
	};

	return (
		<div {...props}>
			<span
				className={cn(styles.likeIcon, {
					[styles.fillLikeIcon]: isLiked,
				})}
				onClick={handleLikeClick}
			>
				<LikeIcon />
			</span>
		</div>
	);
};
