import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface BlogCardHintProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	counter?: string;
	color?: 'text-secondary' | 'text-small';
}
