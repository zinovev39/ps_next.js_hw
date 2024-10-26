import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BlogCreationDateProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	counter?: string;
}
