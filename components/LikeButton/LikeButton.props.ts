import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LikeButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	like: boolean;
	postId?: number;
	setLike: (like: boolean) => void;
}
