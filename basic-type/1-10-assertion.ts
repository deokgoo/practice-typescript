{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);

  const wrong: any = 5;
  console.log((<number[]>wrong).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱

  const button = document.querySelector('.class')!;
  button.nodeValue;
}