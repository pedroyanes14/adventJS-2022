function getFilesToBackup(lastBackup, changes) {
    let elementos_cambiados = []
    changes.forEach(element => {
      if (element[1] > lastBackup && !elementos_cambiados.includes(element[0])) {
        elementos_cambiados.push(element[0])
      }
    }) 
    return elementos_cambiados.sort((a,b) => a-b)
  }