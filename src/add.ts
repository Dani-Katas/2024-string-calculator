export function add(numbers: string): number {

  if (numbers.length > 1) {
    const [a, b] = numbers.split(",");

    return Number(a) + Number(b);
  }

  return Number(numbers);
}
