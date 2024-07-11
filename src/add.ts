export function add(numbers: string): number {
    const numberList = numbers
      .replaceAll("\n", ",")
      .split(",");

    return numberList.reduce((amount, number) =>
      amount + Number(number), 0
    )
}
