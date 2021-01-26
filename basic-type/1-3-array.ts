{
  // Array
  const fruits: string[] = ['🍉', '🍅'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple ->, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0] // name 💩 student.name ✨
  student[1] // 123 💩 student.age ✨
  const [name, age] = student; // ✨
}