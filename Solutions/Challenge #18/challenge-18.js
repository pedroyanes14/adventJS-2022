function dryNumber(dry, numbers) {
    let resultado = []
    for (let i = 1; i <= numbers; i++) {
      if ([i].join('').includes(dry)) resultado.push(i)
    }
    return resultado
}