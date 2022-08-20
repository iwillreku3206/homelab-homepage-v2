import { ButtonHTMLAttributes } from 'react'
import { MdSettings } from 'react-icons/md'

const SettingsButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className="sticky float-right text-2xl dark:text-white text-slate-800 m-4"
			{...props}
		>
			<MdSettings />
		</button>
	)
}

export default SettingsButton
