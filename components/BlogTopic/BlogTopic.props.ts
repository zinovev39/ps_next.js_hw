import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BlogTopicProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	counter?: string;
}