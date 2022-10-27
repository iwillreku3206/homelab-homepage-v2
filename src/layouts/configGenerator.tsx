import { PropsWithChildren, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import ConfigGeneratorBar from '../components/configGenerator/bar'
import ConfigGeneratorSidebar from '../components/configGenerator/sidebar'
import { ColorMode } from '../_types/Settings'

const ConfigGeneratorLayout = (props: PropsWithChildren) => {
	const [theme, setTheme] = useState<ColorMode>('light')

	const sysDark = useMediaQuery('(prefers-color-scheme: dark)')

	useEffect(() => {
		setTheme(sysDark ? 'dark' : 'light')
	}, [sysDark])

	const [sidebarOpen, setSidebarOpen] = useState(false)
	useEffect(() => {
		setSidebarOpen(
			window.matchMedia('(max-width: 768px)').matches ? true : false
		)
	}, [])

	return (
		<div className={theme}>
			<div className="bg-slate-100 dark:bg-slate-800 dark:text-white min-h-screen h-fit overflow-clip">
				<ConfigGeneratorBar />
				<div className="flex flex-row grow-0 shrink basis-0">
					{sidebarOpen && (
						<ConfigGeneratorSidebar
							open={sidebarOpen}
							onClose={() => setSidebarOpen(false)}
						/>
					)}
					<div
						className="w-full p-8 overflow-scroll transition-all duration-150"
						style={{ maxHeight: 'calc(100vh - 48px)' }}
					>
						<button onClick={() => setSidebarOpen(!sidebarOpen)}>test</button>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConfigGeneratorLayout
