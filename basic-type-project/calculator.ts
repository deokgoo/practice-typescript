/**
 * Let's make a calculator 🧮
 */
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(calcType: Command, n1: number, n2: number): number{
  if(calcType === 'add') return n1 + n2;
  if(calcType === 'substract') return n1 - n2;
  if(calcType === 'multiply') return n1 * n2;
  if(calcType === 'divide') return n1 / n2;
  if(calcType === 'remainder') return n1 % n2;
  throw new Error('unknown command')
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
