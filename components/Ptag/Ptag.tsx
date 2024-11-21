import cn from 'classnames';
import styles from './Ptag.module.css';
import { PtagProps } from './Ptag.props';

export const Ptag = ({
	size,
	children,
	className,
	color,
	...props
}: PtagProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.header]: size == 'header',
				[styles.cardHhint]: size == 'cardHhint',
				[styles.cardDescription]: size == 'cardDescription',
				[styles.cardDetailsDescription]: size == 'cardDetailsDescription',
				[styles.cardDetailsLike]: size == 'cardDetailsLike',
				[styles.cardDetailsUserComments]: size == 'cardDetailsUserComments',
				[styles.cardDetailsUserEmailComments]:
					size == 'cardDetailsUserEmailComments',
				[styles.cardDetailsUserTextComments]:
					size == 'cardDetailsUserTextComments',
				[styles.textPrimary]: color == 'textPrimary',
				[styles.textSecondary]: color == 'textSecondary',
				[styles.textSmall]: color == 'textSmall',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
