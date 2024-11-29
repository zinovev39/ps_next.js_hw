import type { BlogCardHintProps } from './BlogCardHint.props';
import styles from './BlogCardHint.module.css';
import cn from 'classnames';

export const BlogCardHint = ({
	color = 'text-secondary',
	children,
	className,
	...props
}: BlogCardHintProps): JSX.Element => {
	return (
		<p
			className={cn(styles.blogCardHint, className, {
				[styles.textSecondary]: color == 'text-secondary',
				[styles.textSmall]: color == 'text-small',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
