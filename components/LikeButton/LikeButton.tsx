import type { LikeButtonProps } from './LikeButton.props';
import styles from './LikeButton.module.css';
import LikeIcon from './icons/like.svg';

export const LikesCount = ({
	children,
	...props
}: LikeButtonProps): JSX.Element => {
	return (
		<p className={styles.LikeButton} {...props}>
			{children}
			<span className={styles.likesIcon}>
				<LikeIcon />
			</span>
		</p>
	);
};
