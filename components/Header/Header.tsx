'use client';

import { Ptag } from '@/components';
import styles from './Header.module.css';
import GithubIcon from './icons/github.svg';

import { AppContext } from '@/context/app.context';
import { useContext } from 'react';

export const Header = (): JSX.Element => {
	const { link } = useContext(AppContext);

	return (
		<header className={styles.header}>
			<Ptag size='header'>.my_blog</Ptag>
			<a href={link}>
				<GithubIcon />
			</a>
		</header>
	);
};
