import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LikeButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	like: boolean;
	setLike: (like: boolean) => void;
}
