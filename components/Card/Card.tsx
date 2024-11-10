//import cn from 'classnames';
import { BlogCardHint, Button, Htag, LikesCount, Ptag } from '@/components';
import Image from 'next/image';
import styles from './Card.module.css';

export const Card = ({}) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardImage}>
				<Image
					src='/card/card-image.png'
					alt='Card picture'
					width={300}
					height={192}
					style={{
						maxWidth: '100%',
						height: 'auto',
					}}
				/>
			</div>
			<div className={styles.hint}>
				<div className={styles.blogInfo}>
					<BlogCardHint color='text-small'>Front-end</BlogCardHint>
					<p className={styles.dotSeparator}>.</p>
					<BlogCardHint>1 месяц назад</BlogCardHint>
				</div>
				<LikesCount>12</LikesCount>
			</div>
			<Htag tag='h3'>Как работать с CSS Grid</Htag>
			<Ptag size='cardDescription' color='textSecondary'>
				Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
				сеток в CSS. Гриды подойдут и для верстки основных областей страницы..
			</Ptag>
			<div className={styles.cardFooter}>
				<BlogCardHint>3 минуты</BlogCardHint>
				<Button color='text-button' arrow='right'>
					Читать
				</Button>
			</div>
		</div>
	);
};
