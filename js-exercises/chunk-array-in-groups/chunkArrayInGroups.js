function chunkArrayInGroups(array, chunkSize) {
  let chunckedArray = []
  while (array.length > 0) {
    chunckedArray.push(array.splice(0, chunkSize))
  }
  return chunckedArray;
}

export {
  chunkArrayInGroups,
};
