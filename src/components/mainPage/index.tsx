import { createContext, useContext, useEffect, useState } from 'react'
import useColorScheme from '../../hooks/useColorScheme'
import { SettingsContext } from '../../pages'

export const BackgroundContext = createContext({
	background: '#000000',
	//eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
	setBackground: (_: string) => {},
})

const MainPage = () => {
	const [background, setBackground] = useState('')

	const theme = useColorScheme()
	const darkMode = theme === 'dark' ? true : false

	const bg = !background.startsWith('#')
		? `/getResourceById?${background}`
		: `/getImageByHex?color=${background}`

	const style = {
		backgroundColor: darkMode ? '#000000c0' : '#ffffffc0',
		backgroundImage: `url(${bg})`,
		backgroundBlendMode: darkMode ? 'darken' : 'lighten',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		transition: 'background 300ms ease-in 200ms',
	}
	return (
		<BackgroundContext.Provider value={{ background, setBackground }}>
			<div className="" style={style}></div>
		</BackgroundContext.Provider>
	)
}

export default MainPage
