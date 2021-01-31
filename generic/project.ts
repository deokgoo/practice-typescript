{
  interface Stack<T> {
    readonly size: number;
    push(data: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly data: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    
    constructor(private capacity) {}
    get size() {
      return this._size;
    }
    push(data: T) {
      if(this.size > this.capacity) throw new Error('over capacity');
      const newNode: StackNode<T> = {
        data,
        next: this.head,
      };
      this.head = newNode;
      this._size++;
    }
    pop(): T {
      if (this.head == null) throw new Error("stack is empty");
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.data;
    }
  }

  const stack1 = new StackImpl<number>(3);
  stack1.push(123);
  stack1.push(456);
  stack1.push(789);
  const stack1Size = stack1.size;
  for (let i=0;i<stack1Size;i++) {
    console.log(stack1.pop());
  }
  const stack2 = new StackImpl<string>(3);
}
