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

//NOTE: It works but I don't understand why. Here ""if (numeros[i] >= numeros[i + 1]) return false""
//it works with "">="" and I think it should only work with "">"", but it doesn't...  SMH :(

//NOTE: I already understood why it works, I am dumb SMH :)