import Badge from '../../_types/Badge'
import BasicBadge from './basicBadge'

const Badge = (props: { badge: Badge }) => {
	const { badge } = props
	const { type } = badge

	if (type === 'basic') return <BasicBadge badge={badge} />
	return <></>
}

export default Badge
