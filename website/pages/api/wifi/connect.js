import {INVENTOR_API_URL} from '../../../constants';

export default async function handler(req, res) {
  const body = req.body
  console.log('Request to connect to WiFi: ', body)

  const ssid = body['wifi-name'];
  const password = body['wifi-password'];
  if (!ssid || !password) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'WiFi Name and/or Wifi Password is missing.' })
  }

  try {
    // TODO: Tell device to save WiFi details
    const resp = await fetch(`${INVENTOR_API_URL}/api/save-wifi`);
    console.log(`Resp => `, resp);

    res.redirect('/wifi/connecting');
  } catch (err) {
    res.redirect('/error');
  }
}
