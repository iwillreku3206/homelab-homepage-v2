import { useContext } from 'react'
import Draggable from 'react-draggable'
import { MdClose } from 'react-icons/md'
import { useMediaQuery } from 'usehooks-ts'
import SettingsLoader from '../../modules/settings'
import { SettingsContext } from '../../pages'
import { ColorMode, DisplayMode, LinkDisplayMode } from '../../_types/Settings'
import Dropdown from '../common/dropdown'

const SettingsOverlay = (props: { open: boolean; onClose: () => void }) => {
	const { open, onClose } = props
	const settings = useContext(SettingsContext)
	return (
		<div
			className={`${
				open ? 'opacity-100' : 'opacity-0 invisible'
			} transition-opacity ease-in-out duration-75`}
		>
			<div className="sm:rounded-lg sm:w-1/2 sm:max-h-1/2-screen w-screen h-screen bg-slate-200 dark:bg-slate-900 fixed sm:top-1/4 sm:left-1/4 text-black dark:text-white flex flex-col">
				<div className="h-12 w-full flex flex-row text-3xl items-center p-3 settings-drag-handle">
					<h1 className="font-bold text-2xl">Settings</h1>
					<button className="ml-auto" onClick={onClose}>
						<MdClose />
					</button>
				</div>
				<hr className="border-1 border-slate-800 dark:border-slate-400" />
				<div className="p-3 overflow-y-scroll">
					<h1 className="text-2xl font-extrabold">Color Mode</h1>
					<label htmlFor="colorMode">Set the color mode of the page</label>
					<Dropdown
						options={[
							{
								name: 'System',
								value: 'system',
							},
							{
								name: 'Light',
								value: 'light',
							},
							{
								name: 'Dark',
								value: 'dark',
							},
						]}
						onChange={(e) =>
							SettingsLoader.getInstance().setSettings({
								...settings,
								colorMode: e.target.value as ColorMode,
							})
						}
						fullWidth
						id="colorMode"
					/>
					<h1 className="text-2xl font-extrabold">Display Mode</h1>
					<label htmlFor="colorMode">
						Set how you want links to be arranged
					</label>
					<Dropdown
						options={[
							{
								name: 'Compact',
								value: 'compact',
							},
							{
								name: 'Per Server',
								value: 'perServer',
							},
							{
								name: 'Per Category',
								value: 'perCategory',
							},
						]}
						onChange={(e) =>
							SettingsLoader.getInstance().setSettings({
								...settings,
								displayMode: e.target.value as DisplayMode,
							})
						}
						fullWidth
					/>
					<h1 className="text-2xl font-extrabold">Link Display Mode</h1>
					<label htmlFor="colorMode">
						Set how you want links to be displayed
					</label>

					<Dropdown
						options={[
							{
								name: 'Cards',
								value: 'cards',
							},
							{
								name: 'Icons',
								value: 'icons',
							},
						]}
						onChange={(e) =>
							SettingsLoader.getInstance().setSettings({
								...settings,
								linkDisplayMode: e.target.value as LinkDisplayMode,
							})
						}
						fullWidth
					/>
				</div>
			</div>
		</div>
	)
}

export default SettingsOverlay
