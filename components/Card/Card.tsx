//import cn from 'classnames';
import Image from 'next/image';
import { BlogCardHint, Button, Htag, LikesCount, Ptag } from '@/components';
import { Post } from '@/interfaces/post.interface';
import Link from 'next/link';
import styles from './Card.module.css';

export const Card = ({ post }: { post: Post }) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardImage}>
				<Image
					src='/cards/cards-image.png'
					alt='Cards picture'
					width={300}
					height={192}
					priority
				/>
			</div>
			<div className={styles.hint}>
				<div className={styles.blogInfo}>
					<BlogCardHint color='text-small'>{post.category}</BlogCardHint>
					<span className={styles.dotSeparator}>.</span>
					<BlogCardHint>{post.hint}</BlogCardHint>
				</div>
				<LikesCount>{post.likes}</LikesCount>
			</div>
			<Htag tag='h3'>{post.title}</Htag>
			<Ptag size='cardDescription' color='textSecondary'>
				{post.body}
			</Ptag>
			<div className={styles.cardFooter}>
				<BlogCardHint>{post.readingTime}</BlogCardHint>
				<Button color='text-button' arrow='right'>
					<Link href={`/blog/${post.id}`}>Читать</Link>
				</Button>
			</div>
		</div>
	);
};
