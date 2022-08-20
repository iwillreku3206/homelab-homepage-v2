import Image from 'next/image'
import React from 'react'
import AppLink, { AppLinkInternal } from '../../_types/AppLink'
import Icon from './icon'
import IconLinkButton from './iconLink'
import StackCardLinkButton from './stackCard'
import StandardLinkButton from './standard'

const LinkButton = (props: {
	link: AppLinkInternal
	style: 'stackCard' | 'icon' | 'standard'
}) => {
	const { style } = props
	if (style === 'stackCard') return <StackCardLinkButton {...props} />
	if (style === 'standard') return <StandardLinkButton {...props} />
	if (style === 'icon') return <IconLinkButton {...props} />

	return <></>
}

export default LinkButton
