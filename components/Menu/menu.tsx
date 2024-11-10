import { getMenu } from '@/api/menu';

export async function Menu() {
	const menu = await getMenu(0);
	return (
		<>
			<div>{JSON.stringify(menu)}</div>
			<div>{menu.length}</div>
		</>
	);
}
