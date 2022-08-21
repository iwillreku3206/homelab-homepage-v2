import type { NextPage } from 'next'
import { createContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import MainPage from '../components/mainPage'
import SettingsButton from '../components/settings/button'
import SettingsOverlay from '../components/settings/menu'
import ConfigLoader from '../modules/configLoader'
import Config, { ConfigInternal } from '../modules/configLoader/config'
import SettingsLoader from '../modules/settings'
import { defaultSettings } from '../modules/settings/defaultSettings'
import Settings, { ColorMode } from '../_types/Settings'

interface Props {
	config: ConfigInternal
}

export const ConfigContext = createContext<ConfigInternal>({
	title: 'Loading...',
})

export const SettingsContext = createContext<Settings>(defaultSettings)

const Home: NextPage<Props> = (props: Props) => {
	const { config } = props
	const [settings, setSettings] = useState<Settings>(defaultSettings)

	const [openSettings, setOpenSettings] = useState(false)
	const [theme, setTheme] = useState<ColorMode>('light')

	useEffect(() => {
		SettingsLoader.getInstance().setSetterFunction(setSettings)
	}, [])

	const systemDark = useMediaQuery('(prefers-color-scheme: dark)')
	useEffect(() => {
		setTheme(
			settings.colorMode !== 'system'
				? settings.colorMode
				: systemDark
				? 'dark'
				: 'light'
		)
	}, [settings.colorMode, systemDark])

	return (
		<div className={theme}>
			<div className="bg-slate-50 dark:bg-slate-800 w-full min-h-screen h-full">
				<ConfigContext.Provider value={config}>
					<SettingsContext.Provider value={settings}>
						<SettingsButton
							onClick={() => {
								setOpenSettings(!openSettings)
							}}
						/>
						<SettingsOverlay
							open={openSettings}
							onClose={() => {
								setOpenSettings(false)
							}}
						/>
						<MainPage />
					</SettingsContext.Provider>
				</ConfigContext.Provider>
			</div>
		</div>
	)
}

export function getServerSideProps() {
	const configLoader = ConfigLoader.getInstance()
	const config = configLoader.reload()

	return {
		props: {
			config: JSON.parse(
				JSON.stringify(config, (_, value) =>
					value === undefined ? null : value
				)
			),
		},
	}
}

export default Home
