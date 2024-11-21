import { Ptag } from '@/components';
import styles from './Header.module.css';
import GithubIcon from './icons/github.svg';

export const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<Ptag size='header'>.my_blog</Ptag>
			<GithubIcon />
		</header>
	);
};
