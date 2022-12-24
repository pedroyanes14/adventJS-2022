function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let max_ciudades = 0
    giftsCities.sort((a, b) => b - a)
    if (giftsCities.length == 0)
      return 0
    giftsCities.forEach(element => {
      if (element == maxGifts)
        return maxGifts
      else if (element > maxGifts)
        giftsCities.shift()
    })
    return giftsCities.reduce((acc, actual) => {
      if (max_ciudades < maxCities && acc + actual <= maxGifts && acc + actual != maxGifts - 1) {
        acc += actual
        max_ciudades++
      }
      return acc
    }, 0)
  }