const leds = [0, 0, 1, 0, 0]
countTime(leds) // 7

function countTime(leds) {
    let total = 0
    let array_aux = [...leds]
    if ((leds.every(x => x === 1)) === true)
        return 0
    else {
        while ((leds.every(x => x == 1)) === false) {
            for (let i = 1; i < leds.length; i++) {
              if (leds[i] === 0 && leds[i - 1] === 1)
                array_aux[i] = 1
              else if (leds[0] === 0 && leds[leds.length - 1] === 1)
                array_aux[0] = 1
            }
            leds = [...array_aux]
            console.log(leds)
            total++
        }
        console.log(total * 7)
        return (total * 7)
    }
}
