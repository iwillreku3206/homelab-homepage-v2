import { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { SettingsContext } from '../pages'
import { ColorMode } from '../_types/Settings'

export default function useColorScheme() {
	const systemDark = useMediaQuery('(prefers-color-scheme: dark)')
	const settings = useContext(SettingsContext)
	const [theme, setTheme] = useState<ColorMode>('light')
	useEffect(() => {
		setTheme(
			settings.colorMode !== 'system'
				? settings.colorMode
				: systemDark
				? 'dark'
				: 'light'
		)
	}, [settings.colorMode, systemDark])

	return theme
}
