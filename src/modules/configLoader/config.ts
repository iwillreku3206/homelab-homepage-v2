import AppLink, { AppLinkInternal } from '../../_types/AppLink'
import Badge from '../../_types/Badge'
import Category from '../../_types/Category'
import ServiceServer from '../../_types/ServiceServer'

export default interface Config {
	title: string
	links?: AppLink[]
	badges?: Badge[]
	categories?: Category[]
	servers?: ServiceServer[]
}
export interface ConfigInternal {
	title: string
	links?: AppLinkInternal[]
	badges?: Badge[]
	categories?: Category[]
	servers?: ServiceServer[]
}
