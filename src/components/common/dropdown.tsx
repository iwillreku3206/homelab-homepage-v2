import {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	SelectHTMLAttributes,
} from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	options: {
		name: string
		value: string
		icon?: JSX.Element
	}[]
	fullWidth?: boolean
	onChange?: ChangeEventHandler<HTMLSelectElement>
}

const Dropdown = (props: Props) => {
	const { options, fullWidth, onChange, value } = props
	return (
		<select
			className={`p-3 ${
				fullWidth ? 'w-full' : 'w-64 max-w-full'
			} focus:bg-slate-300 focus:dark:bg-slate-700 bg-slate-200 dark:bg-slate-800 rounded-lg border-2 dark:border-slate-700 border-slate-400`}
			onChange={onChange}
			value={value}
		>
			{options.map((option) => {
				return (
					<option key={option.value} value={option.value}>
						{option.icon}
						{option.name}
					</option>
				)
			})}
		</select>
	)
}

export default Dropdown
