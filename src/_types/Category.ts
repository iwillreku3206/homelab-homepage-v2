export default interface Category {
	id: string
	title: string
	description?: string
	background: string // if start with #, then is color, otherwise, is image
}
