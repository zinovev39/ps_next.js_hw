import cn from 'classnames';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag = ({
	size,
	children,
	color,
	href,
	className,
	...props
}: TagProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.small]: size == 'small',
				[styles.blue]: color == 'blue',
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</p>
	);
};