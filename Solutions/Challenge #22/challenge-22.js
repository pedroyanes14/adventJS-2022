function checkStepNumbers(systemNames, stepNumbers) {
    const uniq = [...new Set(systemNames)]
    let numeros = []
    for (let i = 0; i < uniq.length; i++) {
      for (let j = 0; j < systemNames.length; j++) {
        if (systemNames[j] === uniq[i])
          numeros.push(stepNumbers[j])
      }
      for (let k = 0; k < numeros.length - 1; k++) {
        if (numeros[i] >= numeros[i + 1]) return false
      }
      numeros = []
    }
    return true      
}