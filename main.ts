let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
let count = 0
basic.forever(function () {
    led.toggle(0, 0)
    basic.pause(500)
})
control.inBackground(function () {
    while (true) {
        count += 1
        strip.setPixelColor(0, neopixel.rgb(0, count, 0))
        strip.show()
        control.waitMicros(200)
    }
})
