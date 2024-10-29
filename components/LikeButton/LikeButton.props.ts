import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LikeButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	counter?: string;
}
