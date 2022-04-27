bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        # . . . #
        `)
    ServoLite.stop()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        ServoLite.forward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        ServoLite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        ServoLite.backward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        ServoLite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        ServoLite.left()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        ServoLite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        ServoLite.right()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        ServoLite.stop()
    }
})
