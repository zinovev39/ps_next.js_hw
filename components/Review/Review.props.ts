import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Comment } from '@/interfaces/review.interface';

export interface ReviewProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review?: Comment;
}
