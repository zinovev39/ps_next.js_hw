'use client';

import cn from 'classnames';
import styles from './LikeButton.module.css';
import type { LikeButtonProps } from './LikeButton.props';
import LikeIcon from './icons/like.svg';

export const LikeButton = ({
	like,
	setLike,
	...props
}: LikeButtonProps): JSX.Element => {
	const handleLikeClick = () => {
		setLike(!like);
	};

	return (
		<div {...props}>
			<span
				className={cn(styles.likeIcon, {
					[styles.fillLikeIcon]: like,
				})}
				onClick={handleLikeClick}
			>
				<LikeIcon />
			</span>
		</div>
	);
};
