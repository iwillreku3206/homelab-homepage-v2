export default function setMultipleLocalStorageKeys(values: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any
}) {
	const keys = Object.keys(values)
	keys.forEach((key) => {
		localStorage.setItem(key, values[key])
	})
}
