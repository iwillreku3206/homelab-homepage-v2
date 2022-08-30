import {
	createContext,
	CSSProperties,
	useContext,
	useEffect,
	useState,
} from 'react'
import useColorScheme from '../../hooks/useColorScheme'
import useDefaultBackgroundColor from '../../hooks/useDefaultBackgroundColor'
import { ConfigContext, SettingsContext } from '../../pages'
import Section from '../section'

export const BackgroundContext = createContext({
	background: '#00000000',
	//eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
	setBackground: (_: string) => {},
})

const MainPage = () => {
	const [background, setBackground] = useState('')
	const [style, setStyle] = useState<CSSProperties>({})

	const theme = useColorScheme()
	const darkMode = theme === 'dark' ? true : false
	const settings = useContext(SettingsContext)
	const config = useContext(ConfigContext)
	const defaultBackground = useDefaultBackgroundColor()

	useEffect(() => {
		let bg = ''
		if (background[0] === '#') {
			bg = `/api/getImageByHex?color=${background.slice(1, 7)}`
		} else {
			bg = `/api/getResourceById?id=${background}`
		}
		setStyle({
			backgroundColor:
				settings.displayMode === 'perCategory'
					? darkMode
						? '#000000c0'
						: '#ffffffc0'
					: '#00000000',
			backgroundImage:
				settings.displayMode === 'perCategory' ? `url(${bg})` : '',
			backgroundBlendMode: darkMode ? 'darken' : 'lighten',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			transition: 'background 300ms ease-in 200ms',
		})
	}, [darkMode, settings.displayMode, background])

	const compactSections = [
		<Section
			key="homepage"
			name={config.title}
			type="category"
			links={config.links || []}
			background={defaultBackground}
		/>,
	]

	const serverSections: JSX.Element[] = []

	const noServers = config.links?.filter((link) => !link.serviceServer)

	if (noServers && noServers.length !== 0) {
		serverSections.push(
			<Section
				key={'noServers'}
				name="No Servers"
				type="server"
				descOrLoc="No server specified"
				background={defaultBackground}
				links={noServers}
			/>
		)
	}

	serverSections.push(
		...(config.servers?.map((server) => (
			<Section
				key={server.id}
				name={server.name}
				type="server"
				descOrLoc={server.location}
				background={defaultBackground}
				links={
					config.links?.filter(
						(link) => link.serviceServer?.id === server.id
					) || []
				}
			/>
		)) || [])
	)

	const categorySections: JSX.Element[] = []

	const noCategories = config.links?.filter((link) => !link.category)

	if (noCategories && noCategories.length !== 0) {
		categorySections.push(
			<Section
				key={'noCategories'}
				name="Uncategorized"
				type="category"
				background={defaultBackground}
				descOrLoc="Uncategorized Services"
				links={noCategories}
			/>
		)
	}

	categorySections.push(
		...(config.categories?.map((category) => (
			<Section
				key={category.id}
				name={category.title}
				type="category"
				descOrLoc={category.description}
				background={category.background}
				links={
					config.links?.filter((link) => link.category?.id === category.id) ||
					[]
				}
			/>
		)) || [])
	)

	let sections: JSX.Element[] = []
	settings.displayMode === 'compact' && (() => (sections = compactSections))()
	settings.displayMode === 'perServer' && (() => (sections = serverSections))()
	settings.displayMode === 'perCategory' &&
		(() => (sections = categorySections))()

	return (
		<BackgroundContext.Provider value={{ background, setBackground }}>
			<div
				className="h-screen overflow-scroll snap-y snap-mandatory snap-always scroll-smooth"
				style={style}
			>
				{(sections || []).map((section) => section)}
			</div>
		</BackgroundContext.Provider>
	)
}

export default MainPage
