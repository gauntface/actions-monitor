import Head from 'next/head'
import {List, Heading, Text, Anchor} from 'dracula-ui'
import lindex from '../styles/l-index.module.css';

export default function Home() {
  return (
    <div className={["drac-bg-black", "drac-text-white"].join(' ')}>
      <Head>
        <title>GitHub Action Monitor</title>
        <meta name="description" content="GitHub Action Monitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={lindex['l-index']}>
        <div className={lindex['l-index-wrapper']}>
          <Heading as="h1" size="xl">💩</Heading>

          <Text as="p">We broke, sorry about that. Please try whatever you were doing again.</Text>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
