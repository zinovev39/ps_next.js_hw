import cn from 'classnames';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';
import ArrowIcon from './icons/arrow.svg';

export const Button = ({
	color,
	arrow = 'none',
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.textButton]: color == 'text-button',
			})}
			{...props}
			tabIndex={0}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.right]: arrow === 'right',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
