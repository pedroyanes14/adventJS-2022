function selectSleigh(distance, sleighs) {
    let mejor = ''
    sleighs.forEach(element => {
      if (element.consumption * distance <= 20)
        mejor = element.name
    })
    if (mejor == '')
      return null
    return mejor
}