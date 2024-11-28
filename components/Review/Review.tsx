import styles from './Review.module.css';
import { ReviewProps } from './Review.props';
import { Ptag } from '../Ptag/Ptag';

import cn from 'classnames';

export const Review = ({
	review,
	className,
	...props
}: ReviewProps): JSX.Element => {
	const { name, email, body } = review || {};
	return (
		<div className={cn(styles.userComment, className)} {...props}>
			<Ptag size='cardDetailsUserComment' color='textSmall'>
				{name}
			</Ptag>
			<span className={styles.dotSeparator}>.</span>
			<Ptag size='cardDetailsUserEmailComment' color='textSecondary'>
				{email}
			</Ptag>
			<Ptag
				size='cardDetailsUserTextComment'
				color='textSmall'
				className={styles.userTextComment}
			>
				{body}
			</Ptag>
		</div>
	);
};
