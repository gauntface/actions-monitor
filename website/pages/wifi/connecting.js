import Head from 'next/head'
import {Input, Button, Heading, Text, Anchor} from 'dracula-ui'
import lwifi from '../../styles/l-wifi.module.css';

export default function WifiConnecting(req) {
  console.log(req);
  return (
    <div className={["drac-bg-black", "drac-text-white"].join(' ')}>
      <Head>
        <title>Connecting to Wifi</title>
        <meta name="description" content="GitHub Action Monitor connecting to WiFi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={lwifi['l-wifi']}>
        <div className={lwifi['l-wifi-wrapper']}>
          <Heading as="h1" size="xl">Derp.</Heading>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
