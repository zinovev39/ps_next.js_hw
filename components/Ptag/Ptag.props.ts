import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type PtagSize =
	| 'header'
	| 'cardDescription'
	| 'cardDetailsDescription'
	| 'cardDetailsLike'
	| 'cardDetailsUserComments'
	| 'cardDetailsUserEmailComments'
	| 'cardDetailsUserTextComments';

export type PtagColor = 'textPrimary' | 'textSecondary' | 'textSmall';

export interface PtagProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: PtagSize;
	color?: PtagColor;
	children: ReactNode;
}
