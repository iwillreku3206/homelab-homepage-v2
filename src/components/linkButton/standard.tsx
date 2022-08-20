import { MdCategory, MdStorage } from 'react-icons/md'
import { AppLinkInternal } from '../../_types/AppLink'
import Badge from '../badge'
import Icon from './icon'

const StandardLinkButton = (props: { link: AppLinkInternal }) => {
	const { link } = props
	const {
		name,
		description,
		redirectUri,
		serviceServer,
		category,
		badges,
		logo,
	} = link
	return (
		<a
			href={redirectUri}
			className="w-128 max-w-screen flex flex-row bg-slate-200 dark:bg-slate-700 p-2 rounded-lg gap-2"
			target="_blank"
			rel="noopener noreferrer"
		>
			{logo && (
				<div className="border-r-2 border-r-black dark:border-r-slate-500">
					<Icon logo={logo} size="md" />
				</div>
			)}
			<div className="grid">
				<h1 className="text-lg font-bold dark:text-white">{name}</h1>
				<div>
					<div className="flex-row flex gap-2 overflow-clip">
						{serviceServer && (
							<span className="flex flex-row dark:text-white text-sm gap-2">
								<MdStorage className="align-bottom self-center" />
								{serviceServer?.name} ({serviceServer?.location})
							</span>
						)}
						{category && (
							<span className="flex flex-row dark:text-white text-sm gap-2">
								<MdCategory className="align-bottom self-center" />
								{category.title}
							</span>
						)}
					</div>
					<div className="dark:text-white text-sm">{description}</div>
				</div>
				{badges && badges.length > 0 && (
					<div className="inline-block">
						{badges &&
							badges.map((badge, index) => {
								return <Badge badge={badge} key={badge.id + index} />
							})}
					</div>
				)}
			</div>
		</a>
	)
}

export default StandardLinkButton
