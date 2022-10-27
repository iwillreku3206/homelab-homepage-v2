import Image from 'next/image'
import Link from 'next/link'

interface Props {
	name: string
	icon: JSX.Element
	link: string
}

const ShortcutLink = (props: Props) => {
	const { name, icon, link } = props
	return (
		<Link href={link}>
			<a className="p-3 px-6 rounded-md w-32 bg-slate-300 dark:bg-slate-700">
				<div className="text-4xl text-center flex flex-row justify-center">
					{icon}
				</div>
				<div className="text-center">{name}</div>
			</a>
		</Link>
	)
}

export default ShortcutLink
