import { useRouter } from 'next/router'

interface Props {
	name: string
	link: string
	icon: JSX.Element
}

const SidebarLink = (props: Props) => {
	const { name, link, icon } = props
	const router = useRouter()
	const active = router.pathname === link
	return (
		<a
			href={link}
			className={`bg-inherit m-4 p-1 rounded-md hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-150 flex flex-row gap-2
				${active ? 'dark:bg-slate-600 bg-slate-300' : ''}`}
		>
			<div className="flex flex-col justify-center">{icon}</div>
			<div>{name}</div>
		</a>
	)
}

export default SidebarLink
