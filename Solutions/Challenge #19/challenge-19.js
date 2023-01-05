function sortToys(toys, positions) {
    let resultado = []
    for (let i = 0; i < toys.length; i++) {
      resultado.push(toys[positions.indexOf(Math.min(...positions) + i)])
    }
    return resultado
}