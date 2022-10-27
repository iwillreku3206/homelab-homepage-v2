import { NextPage } from 'next'
import { MdCategory, MdLink, MdSettings, MdStorage } from 'react-icons/md'
import ShortcutLink from '../../components/configGenerator/shortcutLink'

const ConfigGenerator: NextPage = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Config Editor</h1>
			<br />
			<div
				className="grid grid-flow-col gap-6"
				style={{ gridAutoColumns: 'min-content' }}
			>
				<ShortcutLink
					name="General Settings"
					icon={<MdSettings />}
					link="/configGenerator/general"
				/>
				<ShortcutLink
					name="Links"
					icon={<MdLink />}
					link="/configGenerator/links"
				/>
				<ShortcutLink
					name="Categories"
					icon={<MdCategory />}
					link="/configGenerator/categories"
				/>
				<ShortcutLink
					name="Servers"
					icon={<MdStorage />}
					link="/configGenerator/servers"
				/>
			</div>
		</div>
	)
}

export default ConfigGenerator
