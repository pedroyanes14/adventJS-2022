function countHours(year, holidays) {
    let h = 0
    holidays.forEach(element => {
      let d = new Date(element + "/" + year)
      if (d.getDay() != 0 && d.getDay() != 6)
        h += 2
    });
    return h
  }