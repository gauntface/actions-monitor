import Head from 'next/head'
import {Input, Button, Heading, Text, Anchor} from 'dracula-ui'
import cwifi from '../../styles/c-wifi.module.css'
import lwifi from '../../styles/l-wifi.module.css'
import {INVENTOR_API_URL} from '../../constants'
import { useRouter } from 'next/router'

export default function WiFiSetup() {
  const router = useRouter()

  async function handleSubmit(event) {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      ssid: event.target['wifi-name'].value,
      password: event.target['wifi-password'].value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    try {
      // TODO: Tell device to save WiFi details
      const resp = await fetch(`${INVENTOR_API_URL}/api/save-wifi`, options);
      console.log(`Resp => `, resp);

      router.push('/wifi/connecting');
    } catch (err) {
      console.error('Failed to save wifi details:', err);
      router.push('/error');
    }
  }

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

          <form className={cwifi['c-wifi-form']} onSubmit={handleSubmit}>
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
