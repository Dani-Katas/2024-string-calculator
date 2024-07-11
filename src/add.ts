const sum = (a: number, b: number) => a + b

export function add(numbers: string, delimiter = ","): number {
  if (numbers.startsWith("//")) {
    const alternateNumberList = numbers.substring(4)
    const delimiter = numbers.substring(2, 3)
    return add(alternateNumberList, delimiter)
  }

  const numberList = numbers.replaceAll("\n", delimiter).split(delimiter)

  return numberList.map(Number).reduce(sum, 0)
}
