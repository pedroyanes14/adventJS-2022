function getGiftsToRefill(a1, a2, a3) {
    let regalosOutOfStock = []
    a1.forEach(element => {
      if (!a2.includes(element) && !a3.includes(element) && !regalosOutOfStock.includes(element))
        regalosOutOfStock.push(element)
    })
    a2.forEach(element => {
      if (!a1.includes(element) && !a3.includes(element) && !regalosOutOfStock.includes(element))
        regalosOutOfStock.push(element)
    })
    a3.forEach(element => {
      if (!a1.includes(element) && !a2.includes(element) && !regalosOutOfStock.includes(element))
        regalosOutOfStock.push(element)
    })
    return regalosOutOfStock
}