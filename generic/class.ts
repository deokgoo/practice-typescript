{
  interface Either<L, R> {
    left(): L;
    right(): R;
  }

  class SimpleEither<L, R> implements Either<L, R>{
    constructor(private _left: L, private _right: R) {}
    left() {
      return this._left;
    }
    right() {
      return this._right;
    }
  }
}
