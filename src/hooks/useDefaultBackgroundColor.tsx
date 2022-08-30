import useColorScheme from './useColorScheme'

export default function useDefaultBackgroundColor() {
	const colorScheme = useColorScheme()
	return colorScheme === 'dark' ? '#f8fafc' : '#1e293b'
}
