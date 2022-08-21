import Image from 'next/image'
import React from 'react'
import AppLink, { AppLinkInternal } from '../../_types/AppLink'
import { LinkDisplayMode } from '../../_types/Settings'
import Icon from './icon'
import IconLinkButton from './iconLink'
import StackCardLinkButton from './stackCard'
import StandardLinkButton from './standard'

const LinkButton = (props: {
	link: AppLinkInternal
	style: LinkDisplayMode
}) => {
	const { style } = props
	if (style === 'cards') return <StackCardLinkButton {...props} />
	if (style === 'standard') return <StandardLinkButton {...props} />
	if (style === 'icons') return <IconLinkButton {...props} />

	return <></>
}

export default LinkButton
