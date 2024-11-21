import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PtagProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?:
		| 'header'
		| 'cardDescription'
		| 'cardDetailsDescription'
		| 'cardDetailsLike'
		| 'cardDetailsUserComments'
		| 'cardDetailsUserEmailComments'
		| 'cardDetailsUserTextComments';
	color?: 'textPrimary' | 'textSecondary' | 'textSmall';
	children: ReactNode;
}
