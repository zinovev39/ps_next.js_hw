import { createContext } from 'react'

interface IAppContext {
	link: string;
}

export const AppContext = createContext<IAppContext>({
	link: 'https://github.com/zinovev39',
});




