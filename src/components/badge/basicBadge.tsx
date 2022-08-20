import Badge, { BadgeColors } from '../../_types/Badge'

const BasicBadge = (props: { badge: Badge }) => {
	const { badge } = props

	if (badge.type === 'basic') {
		const { icon, backgroundColor, text, textColor } = badge

		const realbgColor = backgroundColor.startsWith('#')
			? backgroundColor
			: // eslint-disable-next-line @typescript-eslint/no-explicit-any
			  (BadgeColors as any)[backgroundColor] || '#fff'

		const realTextColor = textColor.startsWith('#')
			? textColor
			: // eslint-disable-next-line @typescript-eslint/no-explicit-any
			  (BadgeColors as any)[textColor] || '#000'

		return (
			<div
				className="rounded-md p-1 text-xs w-fit px-2"
				style={{
					backgroundColor: realbgColor,
					color: realTextColor,
				}}
			>
				{icon && (
					<img className="w-3 h-3" src={`/api/getResourceById?id=${icon}`} />
				)}
				{text}
			</div>
		)
	}
	return <></>
}

export default BasicBadge
