import socket
import network
from third_party import tinyweb
from machine import Pin
from utime import sleep
from leds import leds
from inventor import Inventor2040W, NUM_LEDS
from apis.wifi import WifiAPI

# Create a new Inventor2040W
board = Inventor2040W()

ssid = "GitHub Actions Monitor"
password = "123456789"

ap = network.WLAN(network.AP_IF)
ap.config(essid=ssid, password=password) 
ap.active(True)

while ap.active == False:
  pass

print("Access point active")
print(ap.ifconfig())

# Define on-board LED
led = Pin("LED", Pin.OUT)

# Start up a tiny web server
app = tinyweb.webserver()

# Serve a simple Hello World! response when / is called
# and turn the LED on/off using toggle()
@app.route('/')
async def index(request, response):
    await response.send_file('static/index.html')

@app.route('/wifi/setup')
async def wifi_setup(request, response):
    await response.send_file('static/wifi/setup/index.html')

app.add_resource(WifiAPI, '/api/wifi')

# Run the web server as the sole process
app.run(host="0.0.0.0", port=80)