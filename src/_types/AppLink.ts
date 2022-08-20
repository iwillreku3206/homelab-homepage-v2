import Badge from '../_types/Badge'
import Category from './Category'
import ServiceServer from './ServiceServer'

export default interface AppLink {
	logo?: string // url
	name: string
	description: string
	redirectUri: string
	badges?: string[] // badge IDs
	serviceServer?: string // server ID
	category?: string // category ID
}

export interface AppLinkInternal {
	logo?: string
	name: string
	description: string
	redirectUri: string
	badges?: Badge[]
	serviceServer?: ServiceServer
	category?: Category
}
