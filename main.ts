datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showString("LOGGING")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.Happy)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "temperature",
    "light"
    )
    basic.showString("PRESS A TO START")
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showString("STOPPING")
    basic.showIcon(IconNames.No)
})
let logging = false
logging = false
basic.showString("PRESS A TO START")
datalogger.setColumnTitles(
"temperature",
"light"
)
loops.everyInterval(300000, function () {
    if (logging) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        datalogger.log(
        datalogger.createCV("temperature", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
        basic.clearScreen()
    }
})
