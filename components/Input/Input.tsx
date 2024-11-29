import cn from 'classnames';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input = ({
	className,
	error,
	...props
}: InputProps): JSX.Element => {
	return (
		<div className={styles.inputWrapper}>
			<input
				className={cn(className, styles.input, { [styles.error]: error })}
				{...props}
			/>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
};
