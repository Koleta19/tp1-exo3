let direction = 1
let posX = 2
let posY = 2
led.plot(posX, posY)
basic.forever(function () {
    led.unplot(posX, posX)
    posX += direction
    led.plot(posX, posY)
    if (posX >= 4) {
        direction = -1
    } else if (posX <= 0) {
        direction = 1
    }
    basic.pause(200)
})
