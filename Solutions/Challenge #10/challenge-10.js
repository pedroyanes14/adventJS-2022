function checkJump(heights) {
    let indiceMax = heights.indexOf(Math.max(...heights))
    let ascendente = heights.slice(0, indiceMax)
    let descendente = heights.slice(indiceMax + 1, heights.length)
    if ((heights.every(x => x === heights[0])) || (heights.length === 0) 
    || (indiceMax === heights.length - 1) || (indiceMax === 0))
        return false
    for (let i = 0; i < ascendente.length - 1; i++) {
        if (ascendente.length > 1 && ascendente[i] > ascendente[i + 1])
          return false
    }
    for (let j = 0; j < descendente.length - 1; j++) {
        if (descendente.length > 1 && descendente[j] < descendente[j + 1])
          return false
    }
    return true
}