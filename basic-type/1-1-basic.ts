{
  /*
  * JavaScript
  * Primitive: number, string, boolean, bigint, symbol, null, undefined
  * object: function, array.....
  */

  // number
  const num: number = 123;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined; // useless
  age = undefined;
  age = 1;

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
    // while(true) {}
  }
  let neverEnding: never; // 💩
  
  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
