import type { BlogTopicProps } from './BlogTopic.props';
import styles from './BlogTopic.module.css';

export const BlogTopic = ({
	children,
	...props
}: BlogTopicProps): JSX.Element => {
	return (
		<p className={styles.blogTopic} {...props}>
			{children}
		</p>
	);
};
