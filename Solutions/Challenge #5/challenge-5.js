function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(0, ...(
    [...giftsCities
      .reduce((x, y) => x.concat(x.map(x => [y].concat(x))), [[]])]
      .filter((combi) => combi.length <= maxCities)
      .map((combi) => combi.reduce((acc, weight) => acc + weight, 0))
      .filter((item) => item <= maxGifts))
  );
}

//I copy it from here: https://github.com/mamunoz-dev/adventjs-2022/blob/main/day5.md
//AMAZING JOB DONE BY THIS MAN!! :smile: