interface BadgeBase {
	type: 'basic' | 'twoSide'
	id: string
	icon?: string //url
}

interface BasicBadge extends BadgeBase {
	type: 'basic'
	text: string
	textColor: BadgeColor | string
	backgroundColor: BadgeColor | string
}

interface TwoSideBadge extends BadgeBase {
	type: 'twoSide'
	leftText: string
	leftTextColor: BadgeColor | string
	leftBackgroundColor: BadgeColor | string
	rightText: string
	rightTextColor: BadgeColor | string
	rightBackgroundColor: BadgeColor | string
}

export const BadgeColors = {
	red: '#e00',
	green: '#0e0',
	blue: '#00d',
	cyan: '#0ee',
	purple: '#a000a0',
	pink: '#ff80ff',
	yellow: '#ffff00',
	black: '#000000',
	white: '#ffffff',
	orange: '#ff8000',
	lime: '#80ff00',
	lightgray: '#b8b8b8',
	darkgray: '#202020',
	gray: '#808080',
}

export type BadgeColor = keyof typeof BadgeColors

type Badge = BasicBadge | TwoSideBadge
export default Badge
