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
			<div className="flex flex-row">
				<h2 className="text-2xl">{name}</h2>
				<p>
					{type === 'server' && <MdStorage />} {descOrLoc}
				</p>
				<div>
					{links.map((link, index) => (
						<LinkButton link={link} style={style} key={link.name + index} />
					))}
				</div>
			</div>
		</InView>
	)
}

export default Section
