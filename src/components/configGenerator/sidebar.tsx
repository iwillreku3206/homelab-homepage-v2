import {
	MdCategory,
	MdHome,
	MdLink,
	MdSettings,
	MdStorage,
} from 'react-icons/md'
import SidebarLink from './sidebarLink'

interface Props {
	open?: boolean
	onClose: () => void
}

const ConfigGeneratorSidebar = (props: Props) => {
	const { open, onClose } = props
	return (
		<div
			className={`md:w-56 w-screen sticky bg-slate-400 dark:bg-slate-900 p-2 ${
				open ? 'translate-x-leftFull grow-0' : ''
			} duration-150 transition-transform`}
			style={{ height: 'calc(100vh - 48px)' }}
		>
			<SidebarLink name="Home" link="/configGenerator" icon={<MdHome />} />
			<SidebarLink
				name="General"
				link="/configGenerator/general"
				icon={<MdSettings />}
			/>
			<SidebarLink
				name="Links"
				link="/configGenerator/links"
				icon={<MdLink />}
			/>
			<SidebarLink
				name="Categories"
				link="/configGenerator/categories"
				icon={<MdCategory />}
			/>
			<SidebarLink
				name="Servers"
				link="/configGenerator/servers"
				icon={<MdStorage />}
			/>
		</div>
	)
}

export default ConfigGeneratorSidebar
