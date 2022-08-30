import { useContext } from 'react'
import { MdStorage } from 'react-icons/md'
import { SettingsContext } from '../../pages'
import { AppLinkInternal } from '../../_types/AppLink'
import LinkButton from '../linkButton'
import { InView } from 'react-intersection-observer'
import { BackgroundContext } from '../mainPage'

interface Props {
	type: 'category' | 'server'
	name: string
	descOrLoc?: string // description or location
	links: AppLinkInternal[]
	background: string
}

const Section = (props: Props) => {
	const { type, name, descOrLoc, links, background } = props
	const { setBackground } = useContext(BackgroundContext)
	const style = useContext(SettingsContext).linkDisplayMode
	return (
		<InView onChange={(e) => e && setBackground(background)}>
			<div className="min-h-screen flex flex-col dark:text-white p-1 sm:p-12 sm:px-32 gap-4">
				<h2 className="text-2xl font-bold">{name}</h2>
				<p className="flex flex-row gap-2">
					{type === 'server' && (
						<MdStorage className="align-bottom self-center" />
					)}{' '}
					{descOrLoc}
				</p>
				<div
					className="grid grid-flow-col gap-6"
					style={{ gridAutoColumns: 'min-content' }}
				>
					{links.map((link, index) => (
						<LinkButton link={link} style={style} key={link.name + index} />
					))}
				</div>
			</div>
		</InView>
	)
}

export default Section
