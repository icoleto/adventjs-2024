function prepareGifts(gifts) {
  // Code here
  if (Array.isArray(gifts) === false) {
    return [];
  }

  const setGifts = new Set(gifts);
  const sanitizedGifts = [];
  setGifts.forEach((gift) => {
    if (typeof gift === "number") {
      sanitizedGifts.push(gift);
    }
  });

  if (sanitizedGifts.length === 0) {
    return [];
  }

  return Array.from(setGifts).sort();
}
