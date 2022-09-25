import { PropsWithChildren, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import ConfigGeneratorBar from '../components/configGenerator/bar'
import { ColorMode } from '../_types/Settings'

const ConfigGeneratorLayout = (props: PropsWithChildren) => {
	const [theme, setTheme] = useState<ColorMode>('light')

	const sysDark = useMediaQuery('(prefers-color-scheme: dark)')

	useEffect(() => {
		setTheme(sysDark ? 'dark' : 'light')
	}, [sysDark])

	return (
		<div className={theme}>
			<div className="bg-slate-100 dark:bg-slate-800 dark:text-white min-h-screen h-fit">
				<ConfigGeneratorBar />
				<div className="w-full">{props.children}</div>
			</div>
		</div>
	)
}

export default ConfigGeneratorLayout
