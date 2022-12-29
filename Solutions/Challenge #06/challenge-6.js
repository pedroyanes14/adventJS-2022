function createCube(size) {
    let cubo = ''
    let espacio = " "
    let figura1 = '/\\'
    let figura2 = '_\\'
    let figura3 = '\\/'
    let figura4 = '_/'
    let size_for = size*2
    for (let i = 0; i < size_for; i++) {
      if (i > size - 1) {
        if (i == size_for - 1)
          cubo = cubo + espacio.repeat(i - size) + figura3.repeat(size_for - i) + figura4.repeat(size)
        else
          cubo = cubo + espacio.repeat(i - size) + figura3.repeat(size_for - i) + figura4.repeat(size) + "\n"
      }
      else
        cubo = cubo + espacio.repeat((size - 1) - i) + figura1.repeat(i + 1) + figura2.repeat(size) + "\n"
    }
    return cubo
}