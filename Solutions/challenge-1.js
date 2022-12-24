function wrapping(gifts) {
    let regalos_envueltos = []
    gifts.forEach(element => {
      let inicio = "*".repeat(element.length + 2) + "\n" + "*"
      let final = "*" + "\n" + "*".repeat(element.length + 2)
      regalos_envueltos.push(inicio + element + final)
    });
    return regalos_envueltos
  }