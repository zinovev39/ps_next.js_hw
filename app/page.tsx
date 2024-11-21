import { Card } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'My project',
	description: 'Description',
};

export default function Home() {
	return (
		<main>
			<section>
				<Card />
			</section>
		</main>
	);
}
