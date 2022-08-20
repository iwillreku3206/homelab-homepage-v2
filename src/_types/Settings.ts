export default interface Settings {
	colorMode: ColorMode
	displayMode: DisplayMode
	linkDisplayMode: LinkDisplayMode
}
export type ColorMode = 'light' | 'dark' | 'system'
export type DisplayMode = 'compact' | 'perServer' | 'perCategory'
export type LinkDisplayMode = 'icons' | 'cards'
