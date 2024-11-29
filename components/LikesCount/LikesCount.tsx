import type { LikesCountProps } from './LikesCount.props';
import styles from './LikesCount.module.css';
import LikeIcon from './icons/like.svg';

export const LikesCount = ({
	children,
	...props
}: LikesCountProps): JSX.Element => {
	return (
		<p className={styles.likesCount} {...props}>
			{children}
			<span className={styles.likesIcon}>
				<LikeIcon />
			</span>
		</p>
	);
};
