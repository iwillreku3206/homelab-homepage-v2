import React from 'react'
import { AppLinkInternal } from '../../_types/AppLink'
import Badge from '../badge'
import Icon from './icon'
import { MdCategory, MdStorage } from 'react-icons/md'

const IconLinkButton = (props: { link: AppLinkInternal }) => {
	const { link } = props
	const { name, redirectUri, logo } = link
	return (
		<a
			href={redirectUri}
			className="flex flex-col bg-slate-200 dark:bg-slate-700 w-24 rounded-lg gap-2"
			target="_blank"
			rel="noopener noreferrer"
		>
			{logo && (
				<>
					<Icon logo={logo} size="sm" />
				</>
			)}
			<div className="text-base font-bold dark:text-white text-center">
				{name}
			</div>
		</a>
	)
}

export default IconLinkButton
