import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { lookup } from 'mime-types'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (!(req.method === 'GET')) {
		res.status(404).json({ error: `Cannot ${req.method} this route` })
		return
	}

	if (!req.query.id) {
		res.status(400).json({ error: 'No ID specified' })
		return
	}

	const fileDir =
		process.env.CONFIG_FOLDER_PATH || path.resolve(process.cwd(), 'config')

	if (req.query.id.includes('..')) {
		res.status(403).json({ error: 'Forbidden' })
		return
	}

	const filePath = path.resolve(fileDir, 'resources', req.query.id.toString())

	if (!fs.existsSync(filePath)) {
		res.status(404).json({ error: 'Unknown file' })
		return
	}

	try {
		const fileSplit = req.query.id.toString().split('.')
		const fileType = fileSplit[fileSplit.length - 1]
		res
			.status(200)
			.setHeader('Content-Type', lookup(fileType) || 'application/octet-stream')
			.send(fs.readFileSync(filePath))
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Internal server error' })
	}
}
