import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BlogReadingTimeProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	counter?: string;
}
