interface IStack {
  push(num: number): void;
  pop(): number | string;
};

interface LinkedList {
  prev?: LinkedList;
  data: number | string;
};

class Stack implements IStack {
  current: LinkedList;
  push(data: number | string) {
    const newNode: LinkedList = {data};
    if(this.current) {
      newNode.prev = this.current;
    };
    this.current = newNode;
  }
  pop() {
    if(!this.current.prev) {
      this.current = null;
    } else {
      this.current = this.current.prev;
    }
    return this.current.data;
  }
}
