class LRU<T> {
  private capacity: number;
  private linkedList: LinkedList<T>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.linkedList = new LinkedList<T>();
  }

  set(data: T) {
    const node = this.linkedList.find(data);
    if (!node) {
      if (this.linkedList.length > this.capacity) {
        this.linkedList.tail && this.linkedList.remove(this.linkedList.tail);
      }
      this.linkedList.insertAtHead(data);
    } else {
      this.linkedList.remove(node);
      this.linkedList.insertAtHead(data);
    }
  }

  print() {
    this.linkedList.print();
  }
}

type LinkedListNode<T = any> = {
  data?: T;
  prev?: LinkedListNode<T>;
  next?: LinkedListNode<T>;
};

class LinkedList<T> {
  private _headPrev: LinkedListNode<T>;
  private _tail?: LinkedListNode<T>;
  public length: number;
  get tail() {
    return this._tail;
  }
  constructor() {
    this.length = 0;
    this._headPrev = {};
  }

  clear() {
    this.length = 0;
    this._headPrev = {};
    this._tail = undefined;
  }
  insertAtHead(data: T) {
    const first = this._headPrev.next;
    const newNode: LinkedListNode<T> = { data, next: first };
    this._headPrev.next = newNode;
    if (first) first.prev = newNode;
    this.length++;
    if (!this._tail) this._tail = newNode;
  }
  insertAtTail(data: T) {
    let node = this._headPrev;
    while (node.next) {
      node = node.next;
    }
    const newNode: LinkedListNode<T> = {
      data,
      prev: node,
    };
    node.next = newNode;
    this.length++;
    this._tail = newNode;
  }
  find(data: T) {
    let node: LinkedListNode<T> | undefined = this._headPrev;
    while (node) {
      if (node.data === data) return node;
      node = node.next;
    }
    return node;
  }
  indexOf(node: LinkedListNode<T>) {
    let current = this._headPrev.next;
    let index = 0;
    while (current) {
      if (current === node) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  contains(node: LinkedListNode<T>) {
    return this.indexOf(node) !== -1;
  }
  remove(node: LinkedListNode<T>) {
    if (node === this._headPrev) return;
    node.prev && (node.prev.next = node.next);
    node.next && (node.next.prev = node.prev);
    if (this.contains(node)) this.length--;
    if (node === this._tail) {
      this._tail = node.prev === this._headPrev ? undefined : node.prev;
    }
  }
  print() {
    let node: LinkedListNode<T> | undefined = this._headPrev.next;
    const values: (T | undefined)[] = [];
    while (node) {
      values.push(node.data);
      node = node.next;
    }
    console.log(values.join(" -> "));
  }
}

function testLinkedList() {
  const linkedList = new LinkedList<string>();
  console.log(linkedList.length, linkedList.tail);

  linkedList.print();
  linkedList.insertAtTail("2");
  linkedList.print();
  console.log(linkedList.length, linkedList.tail);

  linkedList.insertAtHead("1");
  linkedList.print();
  console.log(linkedList.length, linkedList.tail);

  linkedList.insertAtHead("0");
  linkedList.print();
  console.log(linkedList.length, linkedList.tail);

  linkedList.insertAtTail("3");
  linkedList.print();
  console.log(linkedList.length, linkedList.tail);

  const one = linkedList.find("1");
  console.log(one);

  const five = linkedList.find("5");
  console.log(five);

  one && linkedList.remove(one);
  linkedList.print();

  linkedList.tail && linkedList.remove(linkedList.tail);
  console.log(linkedList.length, linkedList.tail);
  linkedList.print();
}

function testLRU() {
  const lru = new LRU<string>(3);

  lru.print();

  lru.set("a");
  lru.print();

  lru.set("b");
  lru.print();

  lru.set("a");
  lru.print();

  lru.set("c");
  lru.print();

  lru.set("d");
  lru.print();
}

// testLinkedList();

testLRU();
