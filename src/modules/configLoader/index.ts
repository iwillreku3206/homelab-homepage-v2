import Config, { ConfigExternal, ConfigInternal } from './config'
import fs from 'fs'
import path from 'path'
import AppLink, { AppLinkInternal } from '../../_types/AppLink'
import Badge from '../../_types/Badge'

export default class ConfigLoader {
	config: ConfigInternal
	private static instance: ConfigLoader

	public static getInstance() {
		if (!ConfigLoader.instance) ConfigLoader.instance = new ConfigLoader()
		return ConfigLoader.instance
	}

	private constructor() {
		this.config = this.reload()
	}

	public reload() {
		const configPath = path.resolve(
			process.env.CONFIG_FOLDER_PATH || path.resolve(process.cwd(), 'config'),
			'config.json'
		)
		const configFile = JSON.parse(
			fs.readFileSync(configPath).toString()
		) as Config

		this.config = {
			...configFile,
			links: this.getAllLinks(configFile),
		}
		return this.config
	}

	public getAllLinks(configFile: Config): AppLinkInternal[] {
		return (configFile.links || []).map((link) =>
			this.getTransformedAppLink(link, configFile)
		)
	}

	public getTransformedAppLink(
		link: AppLink,
		configFile: Config
	): AppLinkInternal {
		const {
			name,
			description,
			redirectUri,
			serviceServer,
			category,
			badges,
			logo,
		} = link

		const transformedServiceServer = (configFile.servers || []).find(
			(a) => a.id === serviceServer
		)
		const transformedCategory = (configFile.categories || []).find(
			(a) => a.id === category
		)
		const transformedBadges = (badges || [])
			.map((badge) => (configFile.badges || []).find((a) => a.id === badge))
			.filter((a) => a !== undefined) as Badge[]

		return {
			name,
			description,
			redirectUri,
			serviceServer: transformedServiceServer,
			category: transformedCategory,
			badges: transformedBadges,
			logo,
		}
	}
}
