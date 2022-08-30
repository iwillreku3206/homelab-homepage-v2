import { ButtonHTMLAttributes } from 'react'
import { MdSettings } from 'react-icons/md'

const SettingsButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className="fixed right-4 top-4 text-2xl dark:text-white text-slate-800 "
			{...props}
		>
			<MdSettings />
		</button>
	)
}

export default SettingsButton
