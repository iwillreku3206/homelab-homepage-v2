import type { NextApiRequest, NextApiResponse } from 'next'
import Jimp from 'jimp'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (!(req.method === 'GET')) {
		res.status(404).json({ error: `Cannot ${req.method} this route` })
		return
	}

	if (!req.query.color) {
		res.status(400).json({ error: 'No color specified' })
		return
	}

	const color = req.query.color
	if (
		!(
			color.toString().replace('#', '').length === 6 &&
			/[0-9a-fA-F]/g.test(color.toString())
		)
	) {
		res.status(400).json({ error: 'Invalid color' })
	}

	const image = new Jimp(1, 1, `#${req.query.color.toString()}`)

	const buf = await image.getBufferAsync('image/png')
	res.status(200).setHeader('Content-Type', 'image/png').send(buf)
}
