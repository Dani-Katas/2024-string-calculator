const sum = (a: number, b: number) => a + b

export function add(numbers: string, delimiter = ","): number {
  if (numbers.startsWith("//")) {
    const alternateNumberList = numbers.substring(4)
    return add(alternateNumberList, ";")
  }

  const numberList = numbers.replaceAll("\n", delimiter).split(delimiter)

  return numberList.map(Number).reduce(sum, 0)
}
