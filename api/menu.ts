import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '../api/api';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	const res = await fetch(API.topPage.find, {
		method: 'POST',
		body: JSON.stringify({ firstCategory }),
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
	});

	return res.json();
}
