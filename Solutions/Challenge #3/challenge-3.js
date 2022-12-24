function distributeGifts(packOfGifts, reindeers) {
    let peso_max = 0
    let peso_regalos  = 0
    reindeers.forEach(element => {
      peso_max += (element.length * 2)
    });
    packOfGifts.forEach(element => {
      peso_regalos += element.length
    });
    return (Math.trunc(peso_max / peso_regalos))
  }