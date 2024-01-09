import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>DB Demo</title>
				<meta name="description" content="DB Demo : JSON Storage for demo" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main
				style={{
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<h1>[DB Demo]</h1>
			</main>
		</>
	)
}
