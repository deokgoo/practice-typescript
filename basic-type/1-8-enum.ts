{
  /**
   * Enum
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // UnionType
  type DaysOfWeek = 'Monday' | 'Tuesday';
  enum Days {
    Monday,
    TuesDay,
    WednesDay,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Satarday;
  day = Days.TuesDay;
  day = 1;
  console.log(day);

  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Tuesday';
}