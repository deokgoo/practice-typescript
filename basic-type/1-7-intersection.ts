() => {
  /**
   * Intersection Type: &
   */
  type Student = {
    name: string;
    score: number;
  }

  type Worker = {
    empolyeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'deok',
    score: 100,
    empolyeeId: 123,
    work: () => {},
  })
}