import type { BlogCreationDateProps } from './BlogCreationDate.props';
import styles from './BlogCreationDate.module.css';

export const BlogCreationDate = ({
	children,
	...props
}: BlogCreationDateProps): JSX.Element => {
	return (
		<p className={styles.blogCreationDate} {...props}>
			{children}
		</p>
	);
};
