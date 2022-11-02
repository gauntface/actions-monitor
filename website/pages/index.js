import Head from 'next/head'
import {Input} from 'dracula-ui'

export default function Home() {
  return (
    <div className={["drac-bg-black", "drac-text-white"].join(' ')}>
      <Head>
        <title>GitHub Action Monitor</title>
        <meta name="description" content="GitHub Action Monitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Input placeholder="Input" color="white" />;
      </main>

      <footer>

      </footer>
    </div>
  )
}
