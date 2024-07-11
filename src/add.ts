const sum = (a: number, b: number) => a + b;

export function add(numbers: string): number {
  const numberList = numbers
    .replaceAll("\n", ",")
    .split(",");

  return numberList
    .map(Number)
    .reduce(sum, 0);
}
