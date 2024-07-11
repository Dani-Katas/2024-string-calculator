export function add(numbers: string): number {

  if (numbers.length > 1) {
    const numberList = numbers.split(",");

    return numberList.reduce((amount, number) => 
      amount + Number(number), 0
    )
  }

  return Number(numbers);
}
