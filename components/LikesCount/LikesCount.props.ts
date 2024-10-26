import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LikesCountProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	counter?: string;
}
