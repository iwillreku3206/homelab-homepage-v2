import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import ConfigGeneratorBar from '../components/configGenerator/bar'
import LinkButton from '../components/linkButton'
import { ColorMode } from '../_types/Settings'

const ConfigGenerator: NextPage = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Config Editor</h1>
			<div
				className="grid grid-flow-col gap-6"
				style={{ gridAutoColumns: 'min-content' }}
			>
        <LinkButton
      </div>
		</div>
	)
}

export default ConfigGenerator
