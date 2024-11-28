import { Button, Input, Textarea } from '@/components';
import { IReviewForm } from '@/interfaces/reviewform.interface';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';

export const ReviewForm = ({
	postId,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' },
					})}
					placeholder='Имя'
					error={errors.name}
				/>
				<Textarea
					{...register('description', {
						required: { value: true, message: 'Заполните комментарий' },
					})}
					placeholder='Комментарий'
					rows={5}
					error={errors.description}
				/>
				<div>
					<Button className={styles.button}>Отправить</Button>
				</div>
			</div>
		</form>
	);
};
