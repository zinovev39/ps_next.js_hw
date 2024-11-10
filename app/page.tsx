import { Button } from '@/components';
import styles from './page.module.css';

//import { Menu } from '@/components/Menu/menu';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Главная',
	description: 'Description',
};

export default async function Home() {
	return (
		<div className={styles.page}>
			<h1>Главная</h1>
			{/* <Menu /> */}
			<Button className={styles.button}>
				<Link href='/blog'>Блог</Link>
			</Button>
		</div>
	);
}
