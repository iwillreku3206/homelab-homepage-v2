import LinkButton from '../components/linkButton'
import Icon from '../components/linkButton/icon'
import { AppLinkInternal } from '../_types/AppLink'

const Test = () => {
	const sampleLink: AppLinkInternal = {
		name: 'Test Link',
		description:
			'This is a test link for the testing page. It should not link to anything',
		redirectUri: '',
		badges: [
			{
				text: 'Auth Needed',
				type: 'basic',
				id: 'auth',
				backgroundColor: 'green',
				textColor: 'white',
			},
		],
		category: {
			id: 'test',
			background: '',
			title: 'Test Category',
			description: 'This is a test description',
		},
		logo: 'test.svg',
		serviceServer: {
			id: 'testserver',
			name: 'Test Server',
			location: 'The Internet',
			os: 'Debian Linux',
		},
	}
	const sampleLink2: AppLinkInternal = {
		name: 'Test Link',
		description:
			'This is a test link for the testing page. It should not link to anything',
		redirectUri: '',
		badges: [],
		category: {
			id: 'test',
			background: '',
			title: 'Test Category',
			description: 'This is a test description',
		},
	}
	return (
		<>
			<div className="sm:p-12 bg-slate-50 dark:bg-slate-800">
				<h1 className="text-4xl font-bold dark:text-white">Test Page</h1>
				<p className="dark:text-white">
					You have stumbled upon the test page, used for development
				</p>
				<br />
				<br />
				<br />
				<br />
				<h2 className="text-3xl font-bold dark:text-white">Icons</h2>
				<Icon logo="test.svg" size="lg" />
				<Icon logo="test.svg" size="md" />
				<Icon logo="test.svg" size="sm" />
				<Icon logo="test2.png" size="sm" />
				<h2 className="text-3xl font-bold dark:text-white">Links</h2>
				<div className="sm:w-52 w-screen">
					<LinkButton link={sampleLink} style="stackCard" />
					<br />
					<LinkButton link={sampleLink2} style="stackCard" />
				</div>
				<br />
				<div className="sm:w-52 w-screen">
					<LinkButton link={sampleLink} style="standard" />
					<br />
					<LinkButton link={sampleLink2} style="standard" />
				</div>
				<br />
				<div className="sm:w-52 w-screen">
					<LinkButton link={sampleLink} style="icon" />
					<br />
					<LinkButton link={sampleLink2} style="icon" />
				</div>
			</div>
		</>
	)
}

export default Test
