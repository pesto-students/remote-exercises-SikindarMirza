const sumEvenArgs = (...args) => {
  const evenArgs = args.filter(element => element%2 == 0)
  const initialSum = 0
  let sumOfEvenArgs = evenArgs ? evenArgs.reduce((accumulator, sum) => accumulator + sum, initialSum) : initialSum
  return sumOfEvenArgs;
};

export { sumEvenArgs };
