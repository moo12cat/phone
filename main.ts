input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index <= 9; index++) {
        if (list[index] > 0 && list[index] < 9) {
            basic.showNumber(list[index])
            basic.clearScreen()
        } else {
            basic.showNumber(0)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (i1 < 9) {
        i1 += 1
        chosen_number = numbers[i1]
        basic.showNumber(i1)
        basic.clearScreen()
    } else {
        i1 = 0
        chosen_number = numbers[i1]
        basic.showNumber(0)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (list.length < 9) {
        list.push(i1)
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendValue("name", 0)
})
let chosen_number = 0
let i1 = 0
let numbers: number[] = []
let list: number[] = []
list = [0, 0]
numbers = [
0,
1,
2,
3,
4,
5,
6,
7,
8,
9
]
