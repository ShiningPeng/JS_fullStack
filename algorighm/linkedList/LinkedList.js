import LinkedListNode from './LinkedListNode';
const LinkedList
// 线性表
export default class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
  }
  append(value) {
    const newNode = new LinkedListNode(value);
    // 最后一个？
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    //不为空的， head 和tail 有值
    this.tail.next = newNode;
    this.tail = newNode;
  }
  travel() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes;
  }
}

const linkedList = new LinkedList();
linkedList.append(5)
linkedList.append(2)
linkedList.append(9)
console.log(linkedList.travel())

