import Head from 'next/head'
import {Input, Button, Heading, Text, Anchor} from 'dracula-ui'
import cwifi from '../../styles/c-wifi.module.css';
import lwifi from '../../styles/l-wifi.module.css';

export default function WiFiSetup() {
  return (
    <div className={["drac-bg-black", "drac-text-white"].join(' ')}>
      <Head>
        <title>Setup Wifi</title>
        <meta name="description" content="Set up WiFi for GitHub Action Monitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={lwifi['l-wifi']}>
        <div className={lwifi['l-wifi-wrapper']}>
          <Heading as="h1" size="xl">Hi There 👋</Heading>
          <Heading as="h2" size="m" color="green">Welcome to GitHub Actions Monitor.</Heading>

          <Text as="p">Lets start setting up your <Anchor color="yellowPink" hoverColor='purpleCyan' href="https://shop.pimoroni.com/products/inventor-2040-w" isExternal={true}>Inventor 2040 W</Anchor> by connecting it to your WiFi network.</Text>

          <Text as="p">Please enter in your WiFi details.</Text>

          <form className={cwifi['c-wifi-form']} action="/api/wifi/connect" method="post">
            <Input required name="wifi-name" placeholder="WiFi Name" color="green" />
            <Input required name="wifi-password" placeholder="WiFi Password" color="green" type="password" />
            <Button as="input" type="submit" value="Connect to Wifi"/>
          </form>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
