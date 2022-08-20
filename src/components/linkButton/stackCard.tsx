import React from 'react'
import { AppLinkInternal } from '../../_types/AppLink'
import Badge from '../badge'
import Icon from './icon'
import { MdCategory, MdStorage } from 'react-icons/md'

const StackCardLinkButton = (props: { link: AppLinkInternal }) => {
	const { link } = props
	const {
		name,
		description,
		serviceServer,
		redirectUri,
		badges,
		category,
		logo,
	} = link
	return (
		<a
			href={redirectUri}
			className="w-fit flex flex-col bg-slate-200 dark:bg-slate-700 p-2 rounded-lg gap-2"
			target="_blank"
			rel="noopener noreferrer"
		>
			{logo && (
				<>
					<Icon logo={logo} size="lg" />
					<hr className="border-black dark:border-slate-500 border m-1 align-bottom" />
				</>
			)}
			{!logo && <div className="w-52"></div>}
			<h1 className="text-lg font-bold dark:text-white">{name}</h1>
			<div>
				{serviceServer && (
					<span className="flex flex-row dark:text-white text-md gap-2">
						<MdStorage className="align-bottom self-center" />
						{serviceServer?.name} ({serviceServer?.location})
					</span>
				)}
				{category && (
					<span className="flex flex-row dark:text-white text-md gap-2">
						<MdCategory className="align-bottom self-center" />
						{category.title}
					</span>
				)}
			</div>
			<div className="dark:text-white">{description}</div>
			<div className="inline-block">
				{badges &&
					badges.map((badge, index) => {
						return <Badge badge={badge} key={badge.id + index} />
					})}
			</div>
		</a>
	)
}

export default StackCardLinkButton
