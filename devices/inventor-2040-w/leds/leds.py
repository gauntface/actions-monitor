import time

"""
Displays a rotating rainbow pattern on Inventor 2040 W's onboard LED bars.

Press "User" to exit the program.
"""

def hello(board, num_leds):
    # Constants
    SPEED = 5           # The speed that the LEDs will cycle at
    BRIGHTNESS = 0.4    # The brightness of the LEDs
    UPDATES = 50        # How many times the LEDs will be updated per second

    # Variables
    offset = 0.0

    # Make rainbows until the user button is pressed
    while not board.switch_pressed():
        offset += SPEED / 1000.0
        # Update all the LEDs
        for i in range(num_leds):
            hue = float(i) / num_leds
            board.leds.set_hsv(i, hue + offset, 1.0, BRIGHTNESS)

        time.sleep(1.0 / UPDATES)

    # Turn off the LED bars
    board.leds.clear()