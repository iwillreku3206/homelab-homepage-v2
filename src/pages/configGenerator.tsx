import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { ColorMode } from '../_types/Settings'

const ConfigGenerator: NextPage = () => {
	const [theme, setTheme] = useState<ColorMode>('light')

	const sysDark = useMediaQuery('(prefers-color-scheme: dark)')

	useEffect(() => {
		setTheme(sysDark ? 'dark' : 'light')
	}, [sysDark])

	return (
		<div className={theme}>
			<div className="bg-slate-100 dark:bg-slate-800 dark:text-white">
				<h1>Config Generator</h1>
			</div>
		</div>
	)
}

export default ConfigGenerator
