const sum = (a: number, b: number) => a + b

export function add(numbers: string): number {
  if (numbers.startsWith("//")) {
    const alternateNumberList = numbers.substring(4)
    const finalAlternateNumberList = alternateNumberList.split(";")
    return finalAlternateNumberList.map(Number).reduce(sum, 0)
  }

  const numberList = numbers.replaceAll("\n", ",").split(",")

  return numberList.map(Number).reduce(sum, 0)
}
