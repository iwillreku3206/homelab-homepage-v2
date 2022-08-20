const Icon = (props: { logo: string; size: 'lg' | 'md' | 'sm' }) => {
	const { logo, size } = props
	return (
		<span>
			<div className="p-2">
				<div
					className={`${(size === 'lg' && 'w-48 h-48') || ''} ${
						(size === 'md' && 'w-32 h-32') || ''
					} ${
						(size === 'sm' && 'w-20 h-20') || ''
					} flex dark:bg-slate-300 rounded-2xl aspect-square`}
				>
					<img
						className="self-center mx-auto h-3/4 w-3/4"
						src={`/api/getResourceById?id=${logo}`}
					/>
				</div>
			</div>
		</span>
	)
}

export default Icon
