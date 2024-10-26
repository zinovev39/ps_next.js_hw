import type { BlogReadingTimeProps } from './BlogReadingTime.props';
import styles from './BlogReadingTime.module.css';

export const BlogReadingTime = ({
	children,
	...props
}: BlogReadingTimeProps): JSX.Element => {
	return (
		<p className={styles.blogReadingTime} {...props}>
			{children}
		</p>
	);
};
