const sum = (a: number, b: number) => a + b

const hasCustomDelimiter = (numbers: string) => numbers.startsWith("//")

const parseDelimiter = (numbers: string) => numbers.substring(2, 3)

const parseNumbersWithCustomDelimiter = (numbers: string) => numbers.substring(4)

function selectNegatives(parsedNumbers: number[]) {
  return parsedNumbers.filter((n) => n < 0)
}

export function add(numbers: string, delimiter = ","): number {
  if (hasCustomDelimiter(numbers)) {
    const delimiter = parseDelimiter(numbers)
    const numbersWithCustomDelimiter = parseNumbersWithCustomDelimiter(numbers)
    return add(numbersWithCustomDelimiter, delimiter)
  }

  const numberList = numbers.replaceAll("\n", delimiter).split(delimiter)
  const parsedNumbers = numberList.map(Number)

  const negatives = selectNegatives(parsedNumbers)
  if (negatives.length > 0) {
    throw new Error("negatives not allowed: " + negatives.join(", "))
  }

  return parsedNumbers.reduce(sum, 0)
}
