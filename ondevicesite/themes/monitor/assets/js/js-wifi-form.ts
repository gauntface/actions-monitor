function run() {
  const form = document.querySelector('.js-wifi-form');
  if (!form) {
    return;
  }
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
      ssid: event.target.ssid.value,
      password: event.target.password.value,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    try {
      // TODO: Tell device to save WiFi details
      const resp = await fetch(`/api/save-wifi`, options);
      console.log(`Resp => `, resp);
    } catch (err) {
      console.error('Failed to save wifi details:', err);
    }
  })
}

run();
