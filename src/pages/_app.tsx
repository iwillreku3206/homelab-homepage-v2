import '../globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import ConfigGeneratorLayout from '../layouts/configGenerator'

function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	let Layout = (props: PropsWithChildren) => <>{props.children}</>

	if (router.pathname.startsWith('/configGenerator')) {
		Layout = ConfigGeneratorLayout
	}
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default App
