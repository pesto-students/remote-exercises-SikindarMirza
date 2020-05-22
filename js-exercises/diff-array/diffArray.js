function diffArray(...arrays) {
  const [ firstArray, secondArray ] = [...arrays]
  const sortedFirstArray = firstArray.sort()
  const sortedSecondArray = secondArray.sort()
  if(JSON.stringify(sortedFirstArray) == JSON.stringify(sortedSecondArray)) return [] 
  return firstArray.concat(secondArray)
    .filter(element => !(firstArray.includes(element) && secondArray.includes(element)));
}

export {
  diffArray,
};
