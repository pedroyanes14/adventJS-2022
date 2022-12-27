function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(0, ...(
    [...giftsCities
      .reduce((x, y) => x.concat(x.map(x => [y].concat(x))), [[]])]
      .filter((combi) => combi.length <= maxCities)
      .map((combi) => combi.reduce((acc, weight) => acc + weight, 0))
      .filter((item) => item <= maxGifts))
  );
}