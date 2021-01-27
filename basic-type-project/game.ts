/**
 * Let's make a game 🕹
 */
type Direction = 'up' | 'down' | 'left' | 'right';
const position = {x: 0, y: 0};
function move(direction: Direction) {
  if(direction === 'up') position.y+=1;
  if(direction === 'down') position.y-=1;
  if(direction === 'left') position.x-=1;
  if(direction === 'right') position.x+=1;
  throw new Error(`unknown direction ${direction}`);
}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
