import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components';

const openSans = Open_Sans({
	subsets: ['cyrillic'],
	variable: '--font-open-sans',
	weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
	title: 'Блог',
	description: 'Это блог и точка',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={openSans.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
