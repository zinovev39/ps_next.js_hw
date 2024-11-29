import cn from 'classnames';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea = ({
	className,
	error,
	...props
}: TextareaProps): JSX.Element => {
	return (
		<div className={styles.textareaWrapper}>
			<textarea
				className={cn(className, styles.textarea, {
					[styles.error]: error,
				})}
				{...props}
			/>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
};
