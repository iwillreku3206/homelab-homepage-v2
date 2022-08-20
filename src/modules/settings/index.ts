import Settings, {
	ColorMode,
	DisplayMode,
	LinkDisplayMode,
} from '../../_types/Settings'
import setMultipleLocalStorageKeys from './setMultipleLocalStorageKeys'

export default class SettingsLoader {
	settings: Settings
	private setterFunction?: (settings: Settings) => void
	private static instance: SettingsLoader

	public static getInstance() {
		if (!SettingsLoader.instance) SettingsLoader.instance = new SettingsLoader()
		return SettingsLoader.instance
	}

	private constructor() {
		this.settings = this.reload()
	}

	public reload() {
		const settings: Settings = {
			colorMode: (localStorage.getItem('colorMode') as ColorMode) || 'system',
			displayMode:
				(localStorage.getItem('displayMode') as DisplayMode) || 'perCategory',
			linkDisplayMode:
				(localStorage.getItem('linkDisplayMode') as LinkDisplayMode) || 'cards',
		}

		setMultipleLocalStorageKeys(settings)
		this.settings = settings
		return settings
	}

	public setSetterFunction(fn: (settings: Settings) => void) {
		this.setterFunction = fn
	}

	public setSettings(newSettings: Settings) {
		setMultipleLocalStorageKeys(newSettings)
		this.settings = newSettings
		this.setterFunction && this.setterFunction(newSettings)
	}
}
