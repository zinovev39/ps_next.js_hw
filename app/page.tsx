import { Button } from '@/components';
import styles from './page.module.css';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Главная',
	description: 'Description',
};

export default function Home() {
	return (
		<div className={styles.page}>
			<h1>Главная</h1>
			<Button className={styles.button}>
				<Link href='/blog'>Блог</Link>
			</Button>
		</div>
	);
}
