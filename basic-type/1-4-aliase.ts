{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  }
  const student: Student = {
    name: 'deok',
    age: 28,
  }

  /**
   * String Literal Types
   */
  type Name = 'name';
  let deokName: Name;
  deokName = 'name';
  type JSON = 'json'
  const json: JSON = 'json';

  type Boal = true;

  
}