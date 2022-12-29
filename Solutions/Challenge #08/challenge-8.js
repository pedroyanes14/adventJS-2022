function checkPart(part) {
    if (part.length % 2 == 0) {
      for (let i = 0; i < part.length/2; i++) {
        if (part[i] != part[(part.length - 1) - i]) {
          let inicio = part.replace(part[i], '')
          let final = part.replace(part[(part.length - 1) - i], '')
          if (inicio[i] != inicio[(inicio.length - 1) - i]) {
            if (final[i] != final[(final.length - 1) - i])
              return false
          }
        }
      }
    }
    else {
      for (let i = 0; i < (part.length - 1)/2; i++) {
        if (part[i] != part[(part.length - 1) - i]) {
          let inicio = part.replace(part[i], '')
          let final = part.replace(part[(part.length - 1) - i], '')
          if (inicio[i] != inicio[(inicio.length - 1) - i]) {
            if (final[i] != final[(final.length - 1) - i])
              return false
          }
        }
      }
    }
    return true
  }