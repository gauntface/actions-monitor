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
          <Heading as="h1" size="xl">📊 GitHub Actions Monitor</Heading>

          <Text as="p">This is a WIP, but here are some links to enjoy.</Text>

          <List variant="unordered" color="purple">
            <li><Anchor href="/wifi/setup">WiFi Setup</Anchor></li>
          </List>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
